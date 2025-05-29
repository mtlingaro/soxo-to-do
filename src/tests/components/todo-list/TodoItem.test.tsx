import { render, screen, fireEvent } from '@testing-library/react';

import { TodoItem } from '@components/home/todo-list/TodoItem';

import { Todo } from '@models/todo';

import '@testing-library/jest-dom';

describe('TodoItem', () => {
  it('renders correctly and toggles todo item', () => {
    const mockTodo: Todo = {
      userId: 1,
      id: 1,
      title: 'Sample Todo',
      completed: false,
    };

    const onToggleAction = jest.fn();

    render(<TodoItem todo={mockTodo} onToggleAction={onToggleAction} />);

    expect(screen.getByText('Sample Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggleAction).toHaveBeenCalled();
  });
});
