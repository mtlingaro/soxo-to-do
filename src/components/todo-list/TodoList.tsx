import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FilterType, Todo } from '@models/todo';

import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: number, completed: boolean) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, filter, onToggle }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="body1" align="center">
          {filter === 'all'
            ? 'No tasks available'
            : filter === 'completed'
              ? 'No completed tasks'
              : 'No active tasks'}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ mt: 2 }}>
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </List>
    </Paper>
  );
};
