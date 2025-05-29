'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="error" gutterBottom>
        {error.message}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => reset()} sx={{ mt: 3 }}>
        Try again
      </Button>
    </Box>
  );
}
