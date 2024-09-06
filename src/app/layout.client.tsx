'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'
import { theme } from '@/theme/theme'

interface LayoutClientProps {
  children: ReactNode
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
    </ThemeProvider>
  )
}
