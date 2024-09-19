import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

export default function HeroNull() {
  return (
    <Stack
      m="16px"
      boxShadow="rgba(184, 160, 140, 0.5) 0px 19px 38px, rgba(214, 205, 188, 0.5) 0px 15px 12px;
      "
      bgcolor="#f9f4f0"
      p="16px"
      gap="8px"
      borderRadius="8px"
      alignItems="center"
    >
      <Typography variant="h1">MV Weather</Typography>
      <Typography>
        MV Weather is a simple weather app that provides current weather and
        3-days forecast for any city in the world.
      </Typography>
      <Typography fontWeight={600}>Search for a city!</Typography>
    </Stack>
  )
}
