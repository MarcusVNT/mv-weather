'use client'
import { useWeather } from '@/weatherContext'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Image from 'next/image'
import dayjs from 'dayjs'

// icons import
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined'
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined'

export default function Hero() {
  const { locationData, currentWeather } = useWeather()

  if (!currentWeather) {
    return null
  }
  const iconUrl = currentWeather.condition.icon.startsWith('//')
    ? `https:${currentWeather.condition.icon}`
    : currentWeather.condition.icon

  const isSmallScreen = useMediaQuery('(max-width:560px)')

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
            {locationData?.name}
            <Typography>
              {locationData?.region} - {locationData?.country}
            </Typography>
          </Typography>
          <Grid>
            <Typography>
              {dayjs(locationData?.localTime).format('MM/DD/YYYY HH:mm')}
            </Typography>
          </Grid>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          p="8px 32px"
        >
          <Stack
            flexDirection="row"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="8px"
            bgcolor="rgba(216, 243, 248, 0.2)"
            p="16px 32px"
            gap="16px"
          >
            <Stack alignItems="center">
              <Typography fontSize={isSmallScreen ? '1rem' : '1.25rem'}>
                Temperature:
              </Typography>
              <Typography fontSize={isSmallScreen ? '2rem' : '3rem'}>
                {currentWeather.temperature}ºC
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              p="8px"
              borderRadius="8px"
              bgcolor="rgba(89, 148, 163, 0.2)"
            >
              <Image src={iconUrl} alt="Climate icon" width={64} height={64} />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          borderRadius="8px"
          bgcolor="rgba(216, 243, 248, 0.2)"
          p={isSmallScreen ? '8px 24px' : '8px 48px'}
          m="8px"
          flexDirection={isSmallScreen ? 'column' : 'row'}
          justifyContent="space-between"
        >
          <Grid>
            <Stack flexDirection="row" gap="8px">
              <StreamOutlinedIcon />
              <Typography
                fontSize={isSmallScreen ? '0.9rem' : '1rem'}
                fontWeight={600}
              >
                Condition: {currentWeather.condition.text}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="8px">
              <DeviceThermostatOutlinedIcon />
              <Typography
                fontWeight={600}
                fontSize={isSmallScreen ? '0.9rem' : '1rem'}
              >
                Feels like: {currentWeather.feelslike}ºC
              </Typography>
            </Stack>
          </Grid>
          <Grid>
            <Stack flexDirection="row" gap="8px">
              <AirOutlinedIcon />
              <Typography
                fontWeight={600}
                fontSize={isSmallScreen ? '0.9rem' : '1rem'}
              >
                Wind: {currentWeather.wind} km/h
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="8px">
              <WaterDropOutlinedIcon />
              <Typography
                fontWeight={600}
                fontSize={isSmallScreen ? '0.9rem' : '1rem'}
              >
                Humidity: {currentWeather.humidity}%
              </Typography>
            </Stack>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  )
}
