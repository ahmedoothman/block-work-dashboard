import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../mui/theme';

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate('/'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: 'black',
        padding: 2,
      }}
    >
      <Typography variant="h1" color={theme.palette.primary.main} gutterBottom>
        404
      </Typography>
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={3}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoLogin}>
        Go to Login Page
      </Button>
    </Box>
  );
}

export default ErrorPage;
