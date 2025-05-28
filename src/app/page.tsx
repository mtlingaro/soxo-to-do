'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

import { TodoList, Filters } from '@components/todo-list';
import { LoadingSpinner, ErrorMessage } from '@components/ui';

import { useTodos } from '@hooks/use-todos';

import { FilterType } from '@models/todo';

export default function Home() {
  const [filter, setFilter] = useState<FilterType>('all');
  const { todos, isLoading, error, toggleTodo } = useTodos();

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        ToDo List
      </Typography>

      <Box sx={{ my: 3 }}>
        <Filters currentFilter={filter} onFilterChange={handleFilterChange} />
      </Box>

      <TodoList todos={todos} filter={filter} onToggle={toggleTodo} />
    </Container>
  );
}
