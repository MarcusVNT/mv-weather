import { useWeather } from '@/weatherContext'
import { List, ListItem, Stack, Typography } from '@mui/material'

export default function Hourly() {
  const { forecastHoursData, forecastDaysData } = useWeather()

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
        <Typography fontWeight={600} fontSize="1.5rem">
          Hourly
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        p="16px 32px 16px 16px"
      >
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Hour
        </Typography>
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Temperature
        </Typography>
        <Typography sx={{ fontWeight: 600, flex: 1, textAlign: 'center' }}>
          Feels like
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
          {forecastHoursData?.map((hourData, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #5994a3' }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {hourData.time}
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {hourData.temp}ºC
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {hourData.fellsLike}ºC
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'center' }}>
                  {hourData.condition}
                </Typography>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  )
}
