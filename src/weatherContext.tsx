'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

type ForecastDaysType = {
  date: string
  maxTemp: number
  minTemp: number
  condition: string
  icon: string
  maxWind: number
  dailyChanceOfRain: number
  dailyChanceOfSnow: number
  totalPrecipitation: number
  totalSnow: number
}

type WeatherDataType = {
  city: string
  country: string
  region: string
  localTime: string
  condition: string
  temperature: number
  feelsLike: number
  icon: string
  wind: number
  humidity: number
}

type WeatherContextType = {
  weatherData: WeatherDataType | null
  setWeatherData: (data: WeatherDataType) => void
  forecastDaysData: ForecastDaysType[] | null
  setForecastDaysData: (data: ForecastDaysType[]) => void
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
  const [forecastDaysData, setForecastDaysData] = useState<
    ForecastDaysType[] | null
  >(null)
  return (
    <weatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        forecastDaysData,
        setForecastDaysData,
      }}
    >
      {children}
    </weatherContext.Provider>
  )
}
