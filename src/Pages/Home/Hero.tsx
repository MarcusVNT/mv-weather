'use client'
import { useWeather } from '@/weatherContext'
import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import HeroModel from './HeroModel'
import Image from 'next/image'

export default function Hero() {
  const { weatherData } = useWeather()

  if (!weatherData) {
    return <HeroModel />
  }

  const iconUrl = weatherData.icon.startsWith('//')
    ? `https:${weatherData.icon}`
    : weatherData.icon

  return (
    <Stack
      m="16px"
      boxShadow="rgba(184, 160, 140, 0.5) 0px 19px 38px, rgba(214, 205, 188, 0.5) 0px 15px 12px;
      "
      bgcolor="#f9f4f0"
      p="8px"
      borderRadius="8px"
    >
      <Stack bgcolor="#a7cad1" borderRadius="8px">
        <Stack
          bgcolor="#5994a3"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="8px 16px"
          gap="32px"
          borderRadius="8px 8px 0 0"
        >
          <Typography variant="h1">
            {weatherData.city}
            <Typography>
              {weatherData.region} - {weatherData.country}
            </Typography>
          </Typography>
          <Grid>
            <Typography>{weatherData.localTime}</Typography>
          </Grid>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          p="8px 32px"
        >
          <Grid borderRadius="8px" bgcolor="rgba(216, 243, 248, 0.2)" p="8px">
            <Typography fontSize="3.5rem">
              {weatherData.temperature}º
            </Typography>
          </Grid>
          <Stack
            alignItems="center"
            justifyContent="center"
            p="8px"
            borderRadius="8px"
            bgcolor="rgba(216, 243, 248, 0.2)"
          >
            <Image src={iconUrl} alt="Climate icon" width={64} height={64} />
          </Stack>
        </Stack>
        <Stack
          borderRadius="8px"
          bgcolor="rgba(216, 243, 248, 0.2)"
          p="8px 48px"
          m="0 8px 8px 8px"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Grid>
            <Typography fontWeight={600}>
              Condition: {weatherData.condition}
            </Typography>
            <Typography fontWeight={600}>
              Feels like: {weatherData.feelsLike}º
            </Typography>
          </Grid>
          <Grid>
            <Typography fontWeight={600}>
              Wind: {weatherData.wind} km/h
            </Typography>
            <Typography fontWeight={600}>
              Humidity: {weatherData.humidity}%
            </Typography>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  )
}
