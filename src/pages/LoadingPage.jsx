import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import theme from '../mui/theme'; // Ensure you have a theme for consistent styling

function LoadingPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: "black", 
      }}
    >
      <CircularProgress size={60} sx={{ color: theme.palette.primary.main }} />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          color: "white"
        }}
      >
        Loading, please wait...
      </Typography>
    </Box>
  );
}

export default LoadingPage;
