import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0096FF', 
      dark: '#1A4489', 
    },
    secondary: {
      main: '#414141', 
      dark: '#121114', 
      light: '#282728', 
      lightGray:"#D9D9D9"
      
    },
    warning: {
      main: '#FFE234', 
    },
    error: {
      main: '#9b1136', 
    },
    success: {
      main: '#1a7b64',
    },
    background: {
      default: '#EFEFEF', 
    },
    text: {
      primary: '#1354C0', 
      secondary: '#9E9E9E', 
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
