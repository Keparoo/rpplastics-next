import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#81c784',
      light: '#b2fab4',
      dark: '#519657'
    },
    secondary: {
      main: '#800000'
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;

/*
main: '#556cd6'
*/
