'use client'
import { MenuItem, Stack, styled } from '@mui/material'

export default function PeriodNav({
  selectedItem,
  onSelect,
}: {
  selectedItem: string | null
  onSelect: (item: string) => void
}) {
  const StyledMenuItem = styled(MenuItem)(({ selected }) => ({
    fontWeight: 700,
    position: 'relative',
    color: selected ? '#3fa6bb' : 'inherit',
    backgroundColor: 'transparent', // Garante que o background sempre será transparente
    '&.Mui-selected': {
      backgroundColor: 'transparent !important', // Remove o background ao selecionar
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
          selected={selectedItem === 'today'}
          onClick={() => onSelect('today')}
        >
          Today
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedItem === 'hourly'}
          onClick={() => onSelect('hourly')}
        >
          Hourly
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedItem === '3 days'}
          onClick={() => onSelect('3 days')}
        >
          3 days
        </StyledMenuItem>
      </Stack>
    </Stack>
  )
}
