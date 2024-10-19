import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import logo from '../../public/assets/images/logo2.png'; 
import theme from "../mui/theme";

const Logo = () => {
    
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      my={2}
    >
      <Box
        component="img"
        src={logo}
        alt="BlockWork Logo"
        sx={{
          width: 30,
          height: 30,
          mr: 1, 
          color: theme.palette.primary.main,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          
         
        }}
      >
        BlockWork
      </Typography>
    </Box>
  );
};

export default Logo;
