import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

export default function HeroModel() {
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
          <Typography variant="h1">San Martin de Los Andes</Typography>
          <Grid>
            <Typography>9:45 AM</Typography>
            <Typography>Quarta-feira, 25 de setembro</Typography>
          </Grid>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          p="8px"
        >
          <Grid>
            <Typography fontSize="40px">12º</Typography>
            <Typography>Condição</Typography>
          </Grid>
          <Grid>
            <Typography>Imagem do clima do dia</Typography>
            {/* Esse componente será trocado por um componente de imagem */}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  )
}
