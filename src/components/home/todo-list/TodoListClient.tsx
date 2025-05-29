'use client';

import { List, Paper, Typography } from '@mui/material';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { FilterType, Todo } from '@models/todo';

import { TodoItem } from './TodoItem';

interface IProps {
  initialTodos: Todo[];
}

export const TodoListClient: React.FC<IProps> = ({ initialTodos }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const params = useSearchParams();
  const filter = (params.get('filter') as FilterType) || 'all';

  const onToggleAction = (id: number, completed: boolean) => () => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  };

  const filtered = todos.filter((todo) =>
    filter === 'completed' ? todo.completed : filter === 'active' ? !todo.completed : true,
  );

  if (filtered.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography align="center">No tasks</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ mt: 2, maxHeight: '70vh', overflowY: 'auto' }}>
      <List>
        {filtered.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleAction={onToggleAction(todo.id, !todo.completed)}
          />
        ))}
      </List>
    </Paper>
  );
};
