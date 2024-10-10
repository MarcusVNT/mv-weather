'use client'
import { useSelectedPeriod } from '@/selectedPeriodContext'
import { MenuItem, Stack, styled } from '@mui/material'

export default function PeriodNav() {
  const { selectedPeriod, setSelectedPeriod } = useSelectedPeriod()

  const StyledMenuItem = styled(MenuItem)(({ selected }) => ({
    fontWeight: 700,
    position: 'relative',
    color: selected ? '#3fa6bb' : 'inherit',
    backgroundColor: 'transparent',
    '&.Mui-selected': {
      backgroundColor: 'transparent !important',
    },

    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: '5px',
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#3fa6bb',
      transform: selected ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform 0.4s ease-out',
    },
    '&:hover::before': {
      transform: 'scaleX(1)',
      backgroundColor: '#133659',
    },
  }))

  return (
    <Stack
      alignItems="center"
      borderBottom="1px solid rgba(19, 54, 89, 0.3)"
      p="4px"
    >
      <Stack flexDirection="row" justifyContent="space-evenly" width="100%">
        <StyledMenuItem
          selected={selectedPeriod === 'today'}
          onClick={() => setSelectedPeriod('today')}
        >
          Today
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedPeriod === 'hourly'}
          onClick={() => setSelectedPeriod('hourly')}
        >
          Hourly
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedPeriod === '3-days'}
          onClick={() => setSelectedPeriod('3-days')}
        >
          3 days
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedPeriod === 'astro'}
          onClick={() => setSelectedPeriod('astro')}
        >
          Astronomy
        </StyledMenuItem>
      </Stack>
    </Stack>
  )
}
