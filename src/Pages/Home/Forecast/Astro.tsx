import { useWeather } from '@/weatherContext'
import { List, ListItem, Stack, Typography } from '@mui/material'
//icons imports
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined'
import BedtimeOffOutlinedIcon from '@mui/icons-material/BedtimeOffOutlined'
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined'

export default function Astro() {
  const { forecastAstro } = useWeather()
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
          Astronomy
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
                <WbSunnyOutlinedIcon />
                <Typography>Sunrise:</Typography>
              </Stack>
              <Typography>{forecastAstro?.sunrise}</Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Stack flexDirection="row" gap="8px">
                <WbTwilightOutlinedIcon />
                <Typography>Sunset:</Typography>
              </Stack>
              <Typography>{forecastAstro?.sunset}</Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Stack flexDirection="row" gap="8px">
                <NightlightOutlinedIcon />
                <Typography>Moonrise:</Typography>
              </Stack>
              <Typography>{forecastAstro?.moonrise}</Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Stack flexDirection="row" gap="8px">
                <BedtimeOffOutlinedIcon />
                <Typography>Moonset:</Typography>
              </Stack>
              <Typography>{forecastAstro?.moonset}</Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ borderBottom: '1px solid #5994a3' }}>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Stack flexDirection="row" gap="8px">
                <NightsStayOutlinedIcon />
                <Typography>Moon Phase:</Typography>
              </Stack>
              <Typography>{forecastAstro?.moon_phase}</Typography>
            </Stack>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  )
}
