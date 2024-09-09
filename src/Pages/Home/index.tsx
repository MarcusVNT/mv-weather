import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import PeriodNav from './PeriodNav'

export default function HomePage() {
  return (
    <Stack
      alignItems="center"
      m="40px 16px"
      boxShadow="rgba(184, 160, 140, 0.5) 0px 19px 38px, rgba(214, 205, 188, 0.5) 0px 15px 12px;
      "
    >
      <Grid border="1px solid #000" width="100%" bgcolor="#f9f4f0">
        <PeriodNav />
        <Grid p="8px">
          <Typography variant="h1" component="h1">
            MV Weather
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}
