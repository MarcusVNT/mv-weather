'use client'
import {
  AppBar,
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

  let getCurrentWeather = async (city: string) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1//current.json?key=${API_KEY}&q=${city}&lang=en`
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
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
      })
    }
  }

  const { setForecastDaysData } = useWeather()
  let getForecastWeather = async (city: string) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1//forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=yes&lang=en`
    )
    const data = await response.json()

    if (response.ok) {
      const forecast = data.forecast.forecastday.map((today: any) => ({
        date: today.date,
        maxTemp: today.day.maxtemp_c,
        minTemp: today.day.mintemp_c,
        condition: today.day.condition.text,
        icon: today.day.condition.icon,
        maxWind: today.day.maxwind_kph,
        totalPrecipitation: today.day.totalprecip_mm,
        totalSnow: today.day.totalsnow_cm,
        dailyChanceOfRain: today.day.daily_chance_of_rain,
        dailyChanceOfSnow: today.day.daily_chance_of_snow,
      }))
      setForecastDaysData(forecast)
      console.log(data) //Tirar depois
    }
  }

  const { setForecastHoursData } = useWeather()
  let getForecastHours = async (city: string) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1//forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=yes&lang=en`
    )
    const data = await response.json()

    if (response.ok) {
      const forecastHour = data.forecast.forecastday[0].hour.map(
        (hour: any) => ({
          time: hour.time.split(' ')[1],
          temp: hour.temp_c,
          fellsLike: hour.feelslike_c,
          condition: hour.condition.text,
        })
      )
      setForecastHoursData(forecastHour)
    }
  }

  const handleOnSubmit = (data: SearchFieldType) => {
    getCurrentWeather(data.city)
    getForecastWeather(data.city)
    getForecastHours(data.city)
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
                          <IconButton
                            type="submit"
                            onSubmit={handleSubmit(handleOnSubmit)}
                          >
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
