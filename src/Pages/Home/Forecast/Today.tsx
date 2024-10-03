import { useWeather } from '@/weatherContext'
import { List, ListItem, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'

//icon imports
import ThermostatIcon from '@mui/icons-material/Thermostat'
import AirSharpIcon from '@mui/icons-material/AirSharp'
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp'
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp'
import WaterSharpIcon from '@mui/icons-material/WaterSharp'
import SevereColdSharpIcon from '@mui/icons-material/SevereColdSharp'

export default function Today() {
  const { locationData, forecastDays, currentWeather } = useWeather()

  function getDayOfWeek(localtime: string) {
    return dayjs(localtime).format('dddd')
  }

  if (!currentWeather) return null
  const dayOfWeek = getDayOfWeek(locationData!.localTime)

  return (
    <Stack
      m="16px"
      boxShadow="rgba(184, 160, 140, 0.5) 0px 19px 38px, rgba(214, 205, 188, 0.5) 0px 15px 12px;
      "
      bgcolor="#f9f4f0"
      p="8px"
      borderRadius="8px"
    >
      <Stack>
        <Stack
          flexDirection="row"
          justifyContent="center"
          gap="16px"
          alignItems="center"
        >
          <Typography variant="h1" fontWeight={600}>
            Today:
          </Typography>
          <Typography>
            {dayOfWeek} ({dayjs(locationData?.localTime).format('MM/DD/YYYY')})
          </Typography>
        </Stack>
        <Stack flexDirection="row">
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack flexDirection="row" gap="8px">
                  <ThermostatIcon />
                  <Typography>High / Low:</Typography>
                </Stack>
                <Typography>
                  {forecastDays?.[0].day.maxTemp}ºC /{' '}
                  {forecastDays?.[0].day.minTemp}ºC
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack flexDirection="row" gap="8px">
                  <AirSharpIcon />
                  <Typography>Max Wind Speed:</Typography>
                </Stack>
                <Typography>{forecastDays?.[0].day.maxWind}Km/h</Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack flexDirection="row" gap="8px">
                  <ThunderstormSharpIcon />
                  <Typography>Chance Of Rain:</Typography>
                </Stack>
                <Typography>
                  {forecastDays?.[0].day.dailyChanceOfRain}%
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack flexDirection="row" gap="8px">
                  <AcUnitSharpIcon />
                  <Typography>Chance Of Snow:</Typography>
                </Stack>
                <Typography>
                  {forecastDays?.[0].day.dailyChanceOfSnow}%
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack flexDirection="row" gap="8px">
                  <WaterSharpIcon />
                  <Typography>Total Precipitation:</Typography>
                </Stack>
                <Typography>
                  {forecastDays?.[0].day.totalPrecipitation}mm
                </Typography>
              </Stack>
            </ListItem>
            <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack flexDirection="row" gap="8px">
                  <SevereColdSharpIcon />
                  <Typography>Total Snow:</Typography>
                </Stack>
                <Typography>{forecastDays?.[0].day.totalSnow}cm</Typography>
              </Stack>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Stack>
  )
}
