import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#0096FF', //blue
      // dark: '#1A4489', 
      // main: '#FF6500', //orange
      // dark: '#dc5902', 
      main: '#1FD91F', //orange
      dark: '#1cc61c',
    },
    secondary: {
      main: '#414141', 
      dark: '#121114', 
      light: '#353534', 
      lightGray:"#D9D9D9"
      
    },
    warning: {
      main: '#FFE234', 
    },
    error: {
      main: '#9b1111', 
    },
    success: {
      // main: '#09d855',
       main: '#0096FF', //blue

    },
    background: {
      default: '#EFEFEF', 
    },
    text: {
      primary: '#1ed41e', 
      secondary: '#bababa', 
      white:'#ffffff'
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 10, 
  },
});

export default theme;
