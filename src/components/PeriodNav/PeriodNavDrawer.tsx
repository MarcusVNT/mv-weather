import { useSelectedPeriod } from '@/selectedPeriodContext'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined'

export default function PeriodNavDrawer() {
  const [open, setOpen] = useState(false)
  const toogleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const periods = [
    { id: 'today', label: 'Today' },
    { id: 'hourly', label: 'Hourly' },
    { id: '3-days', label: '3 Days' },
    { id: 'astro', label: 'Astro' },
  ]

  const { setSelectedPeriod } = useSelectedPeriod()
  const handleClick = (periodId: string) => {
    setSelectedPeriod(periodId)
    setOpen(false)
  }

  const DrawerList = (
    <Stack
      sx={{ width: '150px', alignItems: 'center' }}
      role="presentation"
      onClick={toogleDrawer(false)}
    >
      <List
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {periods.map(period => (
          <ListItem key={period.id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#3fa6bb',
                },
              }}
              onClick={() => handleClick(period.id)}
            >
              <StarRateOutlinedIcon
                sx={{
                  size: '16px',
                  color: 'primary.main',
                }}
              />
              <ListItemText
                primary={period.label}
                primaryTypographyProps={{ fontWeight: 'bold' }}
                sx={{
                  textAlign: 'center',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
  return (
    <Stack alignItems="start">
      <Button onClick={toogleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toogleDrawer(false)}
        anchor="left"
        PaperProps={{
          sx: {
            display: 'inline-block',
            height: 'auto',
            borderRadius: '8px',
            marginTop: '55px',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Stack>
  )
}
