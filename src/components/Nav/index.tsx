'use client'
import {
  AppBar,
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

type SearchFieldType = {
  city: string
}

export default function Nav() {
  const { control, handleSubmit } = useForm<SearchFieldType>({
    defaultValues: {
      city: '',
    },
  })

  const API_KEY = '79667419929e40fdb23162559240409'

  const { setWeatherData } = useWeather()

  let getWeather = async (city: string) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1//current.json?key=${API_KEY}&q=${city}&lang=pt`
    )
    const data = await response.json()

    if (response.ok) {
      setWeatherData({
        city: data.location.name,
        country: data.location.country,
        region: data.location.region,
        localTime: data.location.localtime,
        condition: data.current.condition.text,
        temperature: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        icon: data.current.condition.icon,
      })
    }
    if (response.ok) {
      console.log(data)
    }
  }

  const handleOnSubmit = (data: SearchFieldType) => {
    getWeather(data.city)
    // console.log(data.city)
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
          <Image
            src="/mv-weather-logo.png"
            width={200}
            height={35}
            alt="Logo MV Waether"
          />

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
                          <SearchIcon sx={{ color: '#a7cad1' }} />
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
