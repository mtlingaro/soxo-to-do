import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { TodoList, Filters } from '@components/home';

import { FilterType } from '@models/todo';

interface IProps {
  searchParams?: {
    filter?: FilterType;
  };
}

export default async function Home({ searchParams }: IProps) {
  const { filter = 'all' } = (await searchParams) ?? {};

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        ToDo List
      </Typography>

      <Box sx={{ my: 3 }}>
        <Filters filter={filter} />
      </Box>

      <TodoList />
    </Container>
  );
}
