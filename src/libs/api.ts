import { Todo } from '@models/todo';

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }

    const data: Todo[] = await response.json();
    return data.slice(0, 20); // Limit to 20 todos
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Network error occurred while fetching todos');
  }
};
