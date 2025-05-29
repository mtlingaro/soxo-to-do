import { render, screen, fireEvent } from '@testing-library/react';

import { TodoListClient } from '@components/home/todo-list/TodoListClient';

import { Todo } from '@models/todo';

import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (key: string) => (key === 'filter' ? 'active' : null),
  }),
}));

const mockTodos: Todo[] = [
  { userId: 1, id: 1, title: 'Task One', completed: false },
  { userId: 1, id: 2, title: 'Task Two', completed: false },
  { userId: 1, id: 3, title: 'Task Three', completed: false },
];

describe('TodoListClient', () => {
  it('renders all todos by default', () => {
    render(<TodoListClient initialTodos={mockTodos} />);
    expect(screen.getByText('Task One')).toBeInTheDocument();
    expect(screen.getByText('Task Two')).toBeInTheDocument();
    expect(screen.getByText('Task Three')).toBeInTheDocument();
  });

  it('toggles a todo when clicked', () => {
    render(<TodoListClient initialTodos={mockTodos} />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('displays "No tasks" message if filtered list is empty', () => {
    const completedTodos: Todo[] = [{ userId: 1, id: 1, title: 'Done Task', completed: true }];

    render(<TodoListClient initialTodos={completedTodos} />);
    expect(screen.getByText('No tasks')).toBeInTheDocument();
  });
});
