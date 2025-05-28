'use client';

import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useEffect, useState } from 'react';

import { Todo } from '@models/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => void;
};
export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [todo.completed]);

  const handleToggle = () => {
    onToggle(todo.id, !todo.completed);
  };

  return (
    <ListItem disablePadding className={isAnimating ? 'fade-in' : ''}>
      <ListItemButton role={undefined} dense onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onChange={handleToggle}
          />
        </ListItemIcon>
        <ListItemText
          primary={todo.title}
          className={todo.completed ? 'completed' : ''}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'text.secondary' : 'text.primary',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
