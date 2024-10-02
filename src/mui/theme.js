import { createTheme } from '@mui/material/styles';

// Define your color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#201E43', // Primary color (e.g.,darkblue)
    },
    secondary: {
      main: '#9cc0cf', // Secondary color (e.g., gray)
    },
    background: {
      default: '#fff', // Background color for the app
    },
    text: {
      primary: '#333', // Primary text color
      secondary: '#555', // Secondary text color
    },
  },
  typography: {
    // Customize typography here
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    // Add more typography customization as needed
  },
});

export default theme;
