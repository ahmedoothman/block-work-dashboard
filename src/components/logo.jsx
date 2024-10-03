import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import logo from '../../public/assets/images/logo.png'; 
import theme from "../mui/theme";

const Logo = () => {
    
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      my={3}
    >
      <Box
        component="img"
        src={logo}
        alt="BlockWork Logo"
        sx={{
          width: 40,
          height: 40,
          mr: 1, 
          color: theme.palette.primary.main,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 'regular',
         
        }}
      >
        BlockWork
      </Typography>
    </Box>
  );
};

export default Logo;
