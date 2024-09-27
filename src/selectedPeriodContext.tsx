'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

type SelectedPeriodContextType = {
  selectedPeriod: string | null
  setSelectedPeriod: (period: string | null) => void
}

const SelectedPeriodContext = createContext<
  SelectedPeriodContextType | undefined
>(undefined)

export const useSelectedPeriod = () => {
  const context = useContext(SelectedPeriodContext)
  if (!context) {
    throw new Error(
      'useSelectedPeriod must be used within a SelectedPeriodProvider'
    )
  }
  return context
}

export const SelectedPeriodProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null)

  return (
    <SelectedPeriodContext.Provider
      value={{ selectedPeriod, setSelectedPeriod }}
    >
      {children}
    </SelectedPeriodContext.Provider>
  )
}
