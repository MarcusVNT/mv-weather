'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

type WeatherDataType = {
  city: string
  country: string
  region: string
  localTime: string
  condition: string
  temperature: number
  feelsLike: number
  icon: string
  // minTemp: number
  // maxTemp: number
}

type WeatherContextType = {
  weatherData: WeatherDataType | null
  setWeatherData: (data: WeatherDataType) => void
}

const weatherContext = createContext<WeatherContextType | undefined>(undefined)

export const useWeather = () => {
  const context = useContext(weatherContext)
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null)
  return (
    <weatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </weatherContext.Provider>
  )
}
