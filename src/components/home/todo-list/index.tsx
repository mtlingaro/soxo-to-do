import { Todo } from '@models/todo';

import { TodoListClient } from './TodoListClient';

export const TodoList = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }

    const todos: Todo[] = await response.json();

    return <TodoListClient initialTodos={todos} />;
  } catch {
    throw new Error('Failed to render TodoList');
  }
};
