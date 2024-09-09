'use client'
import { Button, MenuItem, Stack, styled } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { transform } from 'next/dist/build/swc'
import { useState } from 'react'

export default function PeriodNav() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

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

  const handleClickMenuItem = (item: string) => {
    console.log('click')
    setSelectedItem(item)
  }

  return (
    <Stack
      alignItems="center"
      borderBottom="1px solid rgba(19, 54, 89, 0.3)"
      p="4px"
    >
      <Stack flexDirection="row" justifyContent="space-evenly" width="100%">
        <StyledMenuItem
          selected={selectedItem === 'today'}
          onClick={() => handleClickMenuItem('today')}
        >
          Today
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedItem === 'hourly'}
          onClick={() => handleClickMenuItem('hourly')}
        >
          Hourly
        </StyledMenuItem>
        <StyledMenuItem
          selected={selectedItem === '10 days'}
          onClick={() => handleClickMenuItem('10 days')}
        >
          10 days
        </StyledMenuItem>
      </Stack>
    </Stack>
  )
}
