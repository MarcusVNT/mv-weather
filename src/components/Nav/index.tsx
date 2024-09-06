import {
  AppBar,
  Button,
  Grid2 as Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Toolbar,
} from '@mui/material'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'

export default function Nav() {
  return (
    <AppBar
      sx={{
        background: 'linear-gradient(90deg, #133659, #1c4f83)', // Gradiente personalizado
        position: 'static',
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Image
            src="/mv-weather-logo.png"
            width={250}
            height={45}
            alt="Logo MV Waether"
          />
          <Stack>
            <TextField
              variant="outlined"
              label="City"
              size="small"
              id="search-city"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: '#a7cad1' }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
