export type FilterType = 'all' | 'active' | 'completed';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
