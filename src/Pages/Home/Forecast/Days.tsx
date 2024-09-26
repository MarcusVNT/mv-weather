import { useWeather } from '@/weatherContext'
import { List, ListItem, Stack, Typography } from '@mui/material'

export default function Days() {
  const { forecastDaysData } = useWeather()

  function getDayOfWeek(date: string) {
    const day = new Date(date)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const dayIndex = day.getUTCDay()
    return daysOfWeek[dayIndex]
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
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        p="16px 32px 16px 16px"
      >
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Day
        </Typography>
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Max / Min
        </Typography>
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Chance of Rain
        </Typography>
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Chance of Snow
        </Typography>
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Condition
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
    </Stack>
  )
}
