import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#78d851',
      dark: '#007600',
      main: '#41a61d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#e8f5e9',
      dark: '#b6c2b7',
      contrastText: '#424242',
    },
    background: {
      default: '#f9f9f9',
    }
  },
});
