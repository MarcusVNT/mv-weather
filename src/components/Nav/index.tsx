import {
  AppBar,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'

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
          spacing={2}
        >
          <Stack maxWidth="250px">
            <Image
              src="/mv-weather-logo.png"
              width={200}
              height={35}
              alt="Logo MV Waether"
            />
          </Stack>

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
