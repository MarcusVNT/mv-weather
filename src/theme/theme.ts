import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#fefaee',
      paper: '#2E2E2E',
    },
    primary: {
      // light: '#00B37E',
      // main: '#00875F',
      light: '#3fa6bb',
      main: '#133659',
    },
    error: {
      light: '#FF7E7E',
      main: '#F75A68',
      dark: '#D12C2C',
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1E88E5',
    },
    success: {
      light: '#81C784',
      main: '#4CAF50',
      dark: '#388E3C',
    },
    warning: {
      light: '#FFD54F',
      main: '#FFC107',
      dark: '#FFA000',
    },
    grey: {
      '50': '#E1E1E6',
      '100': '#C4C4CC',
      '200': '#8D8D99',
      '400': '#7C7C8A',
      '600': '#323238',
      '800': '#202024',
      '900': '#121214',
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem',
    },
    body1: {
      color: '#133659',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #fefaee , #efe9db)',
          margin: 0,
          padding: 0,
          backgroundAttachment: 'fixed',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& .MuiOutlinedInput-root': {
              background: 'transparent',
              borderRadius: 16,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#a7cad1',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3fa6bb', // Cor da borda ao passar o mouse
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                borderColor: '#a7cad1', // Cor da borda quando em foco
              },

            '& .MuiOutlinedInput-root.Mui-focused ': {
              color: '#a7cad1',
            },
            '& .MuiInputBase-input': {
              color: '#a7cad1', // Cor do texto quando o campo está em foco
            },
            '& .MuiInputLabel-root': {
              color: '#a7cad1',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#a7cad1', // Cor do label quando o input está focado
            },
          },
        },
      ],
    },
  },
})
