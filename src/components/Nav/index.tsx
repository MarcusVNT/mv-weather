'use client'
import {
  AppBar,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { useWeather } from '@/weatherContext'
import { useRouter } from 'next/navigation'
import { useSelectedPeriod } from '@/selectedPeriodContext'

type SearchFieldType = {
  city: string
}

export default function Nav() {
  const router = useRouter()
  const { control, handleSubmit, reset } = useForm<SearchFieldType>({
    defaultValues: {
      city: '',
    },
  })
  const { setSelectedPeriod } = useSelectedPeriod()
  const { fetchWeatherData, resetWeatherData } = useWeather()

  const handleOnSubmit = async (data: SearchFieldType) => {
    await fetchWeatherData(data.city)
  }

  const handleClick = () => {
    reset({ city: '' })
    resetWeatherData()
    setSelectedPeriod(null)
    router.push('/')
  }

  return (
    <AppBar
      sx={{
        background: 'linear-gradient(90deg, #133659, #1c4f83)',
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
          <Button onClick={handleClick}>
            <Image
              src="/mv-weather-logo.png"
              width={200}
              height={35}
              alt="Logo MV Waether"
            />
          </Button>

          <Grid component="form" onSubmit={handleSubmit(handleOnSubmit)}>
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="City"
                  size="small"
                  id="search-city"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton type="submit">
                            <SearchIcon sx={{ color: '#a7cad1' }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Grid>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
