'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

type ForecastHoursType = {
  condition: string
  temp: number
  fellsLike: number
  time: string
}

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

type CurrentWeatherType = {
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
  fetchWeatherData: (city: string) => Promise<{
    currentWeather: CurrentWeatherType | null
    forecastDays: ForecastDaysType[] | null
    forecastHours: ForecastHoursType[] | null
  } | null>
  resetWeatherData: () => void
  currentWeather: CurrentWeatherType | null
  forecastDays: ForecastDaysType[] | null
  forecastHours: ForecastHoursType[] | null
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
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherType | null>(null)
  const [forecastDays, setForecastDays] = useState<ForecastDaysType[] | null>(
    null
  )
  const [forecastHours, setForecastHours] = useState<
    ForecastHoursType[] | null
  >(null)

  const API_KEY = '79667419929e40fdb23162559240409'

  const resetWeatherData = () => {
    setCurrentWeather(null)
    setForecastDays(null)
    setForecastHours(null)
  }

  async function fetchWeatherData(city: string) {
    try {
      const weatherDataResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3&q=${city}&aqi=yes&lang=en`
      )
      const weatherData = await weatherDataResponse.json()
      console.log(weatherData)
      if (weatherDataResponse.ok) {
        setCurrentWeather({
          city: weatherData.location.name,
          country: weatherData.location.country,
          region: weatherData.location.region,
          localTime: weatherData.location.localtime,
          condition: weatherData.current.condition.text,
          temperature: weatherData.current.temp_c,
          feelsLike: weatherData.current.feelslike_c,
          icon: weatherData.current.condition.icon,
          wind: weatherData.current.wind_kph,
          humidity: weatherData.current.humidity,
        })

        //Previsão do dia
        const forecastDays = weatherData.forecast.forecastday.map(
          (today: any) => ({
            date: today.date,
            maxTemp: today.day.maxtemp_c,
            minTemp: today.day.mintemp_c,
            condition: today.day.condition.text,
            icon: today.day.condition.icon,
            maxWind: today.day.maxwind_kph,
            totalPrecipitation: today.day.totalprecip_mm,
            totalSnow: today.day.totalsnow_cm,
            dailyChanceOfRain: today.day.daily_chance_of_rain,
            dailyChanceOfSnow: today.day.daily_chance_of_snow,
          })
        )
        setForecastDays(forecastDays)

        const forecastHours = weatherData.forecast.forecastday[0].hour.map(
          (hour: any) => ({
            time: hour.time.split(' ')[1],
            temp: hour.temp_c,
            fellsLike: hour.feelslike_c,
            condition: hour.condition.text,
          })
        )
        setForecastHours(forecastHours)

        return { currentWeather, forecastDays, forecastHours }
      } else {
        console.error('Erro na resposta da previsão do clima.')
      }
    } catch (error) {
      console.error('Erro na requisição de clima:', error)
    }
    return null
  }
  return (
    <weatherContext.Provider
      value={{
        fetchWeatherData,
        resetWeatherData,
        currentWeather,
        forecastDays,
        forecastHours,
      }}
    >
      {children}
    </weatherContext.Provider>
  )
}
