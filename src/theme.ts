import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Azul claro
    },
    secondary: {
      main: '#f48fb1', // Rosa claro
    },
    background: {
      default: '#100f19',
      paper: '#1e1e1e'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default darkTheme
