import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Loading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" mt={2}>
        Loading...
      </Typography>
    </Box>
  );
}
