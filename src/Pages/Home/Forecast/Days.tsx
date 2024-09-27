import { useWeather } from '@/weatherContext'
import { List, ListItem, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import dayjs from 'dayjs'

//import icons
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp'
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp'
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined'

export default function Days() {
  const { forecastDaysData } = useWeather()

  function getDayOfWeek(date: string) {
    return dayjs(date).format('ddd')
  }

  return (
    <Stack
      m="16px"
      boxShadow="rgba(184, 160, 140, 0.5) 0px 19px 38px, rgba(214, 205, 188, 0.5) 0px 15px 12px;
      "
      bgcolor="#f9f4f0"
      p="8px"
      borderRadius="8px"
    >
      <Stack flexDirection="row" justifyContent="center" gap="32px">
        <Typography variant="h1" fontWeight={600}>
          3 days
        </Typography>
      </Stack>

      <Stack flexDirection="row">
        <List
          sx={{
            width: '100%',
            overflowY: 'auto',
            maxHeight: '30vh',
            paddingRight: '8px',
          }}
        >
          <Stack flexDirection="row" justifyContent="space-around" p="16px">
            <DateRangeSharpIcon />
            <ThermostatIcon />
            <ThunderstormSharpIcon />
            <AcUnitSharpIcon />
            <StreamOutlinedIcon />
          </Stack>
          {forecastDaysData?.map((daysData, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {getDayOfWeek(daysData.date)}
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {daysData.maxTemp}ºC / {daysData.minTemp}ºC
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {daysData.dailyChanceOfRain}%
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {daysData.dailyChanceOfSnow}%
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {daysData.condition}
                </Typography>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Grid p="16px 32px 16px 16px" gap="8px" container>
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <DateRangeSharpIcon />
          <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
            Day
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <ThermostatIcon />
          <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
            Max/Min
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <ThunderstormSharpIcon />
          <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
            Chance of Rain
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <AcUnitSharpIcon />
          <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
            Chance of Snow
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="4px">
          <StreamOutlinedIcon />
          <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
            Condition
          </Typography>
        </Stack>
      </Grid>
    </Stack>
  )
}
