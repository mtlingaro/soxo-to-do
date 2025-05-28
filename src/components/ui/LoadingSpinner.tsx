import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import React from 'react';

export const LoadingSpinner = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};
