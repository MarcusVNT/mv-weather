'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

// type ForecastHoursType = {
//   condition: string
//   temp: number
//   fellsLike: number
//   time: string
// }

// type ForecastDaysType = {
//   date: string
//   maxTemp: number
//   minTemp: number
//   condition: string
//   icon: string
//   maxWind: number
//   dailyChanceOfRain: number
//   dailyChanceOfSnow: number
//   totalPrecipitation: number
//   totalSnow: number
// }

// type CurrentWeatherType = {
//   city: string
//   country: string
//   region: string
//   localTime: string
//   condition: string
//   temperature: number
//   feelsLike: number
//   icon: string
//   wind: number
//   humidity: number
// }

interface WeatherApiResponse {
  location: {
    name: string
    country: string
    region: string
    localTime: string
  }
  current: {
    condition: {
      text: string
      icon: string
    }
    temperature: number
    feelslike: number
    wind: number
    humidity: number
  }
  forecast: {
    forecastday: {
      date: string
      day: {
        maxTemp: number
        minTemp: number
        condition: {
          text: string
          icon: string
        }
        maxWind: number
        dailyChanceOfRain: number
        dailyChanceOfSnow: number
        totalPrecipitation: number
        totalSnow: number
      }
      hour: Array<{
        time: string
        temp: number
        feelslike: number
        condition: {
          text: string
        }
      }>
    }[]
  }
}

type WeatherContextType = {
  fetchWeatherData: (city: string) => Promise<WeatherApiResponse | null>
  resetWeatherData: () => void
  locationData: WeatherApiResponse['location'] | null
  currentWeather: WeatherApiResponse['current'] | null
  forecastDays: WeatherApiResponse['forecast']['forecastday'] | null
  forecastHours: WeatherApiResponse['forecast']['forecastday'][0]['hour'] | null
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
  const [locationData, setLocationData] = useState<
    WeatherApiResponse['location'] | null
  >(null)
  const [currentWeather, setCurrentWeather] = useState<
    WeatherApiResponse['current'] | null
  >(null)
  const [forecastDays, setForecastDays] = useState<
    WeatherApiResponse['forecast']['forecastday']
  >([])
  const [forecastHours, setForecastHours] = useState<
    WeatherApiResponse['forecast']['forecastday'][0]['hour']
  >([])

  const API_KEY = '79667419929e40fdb23162559240409'

  const resetWeatherData = () => {
    setLocationData(null)
    setCurrentWeather(null)
    setForecastDays([])
    setForecastHours([])
  }

  async function fetchWeatherData(
    city: string
  ): Promise<WeatherApiResponse | null> {
    try {
      const weatherDataResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3&q=${city}&aqi=yes&lang=en`
      )
      const weatherData = await weatherDataResponse.json()

      if (weatherDataResponse.ok) {
        if (
          !weatherData.forecast ||
          !Array.isArray(weatherData.forecast.forecastday)
        ) {
          console.error('Previsão do tempo não encontrada na resposta da API.')
          return null
        }

        setLocationData({
          name: weatherData.location.name,
          country: weatherData.location.country,
          region: weatherData.location.region,
          localTime: weatherData.location.localtime,
        })

        setCurrentWeather({
          condition: {
            text: weatherData.current.condition.text,
            icon: weatherData.current.condition.icon,
          },
          temperature: weatherData.current.temp_c,
          feelslike: weatherData.current.feelslike_c,
          wind: weatherData.current.wind_kph,
          humidity: weatherData.current.humidity,
        })
        // Usando map para processar os dias de previsão e as horas
        const forecastDays = weatherData.forecast.forecastday.map(
          (day: any) => ({
            date: day.date,
            day: {
              maxTemp: day.day.maxtemp_c,
              minTemp: day.day.mintemp_c,
              condition: {
                text: day.day.condition.text,
                icon: day.day.condition.icon,
              },
              maxWind: day.day.maxwind_kph,
              dailyChanceOfRain: day.day.daily_chance_of_rain,
              dailyChanceOfSnow: day.day.daily_chance_of_snow,
              totalPrecipitation: day.day.totalprecip_mm,
              totalSnow: day.day.totalsnow_cm,
            },
          })
        )
        setForecastDays(forecastDays)

        const forecastHours = weatherData.forecast.forecastday[0].hour.map(
          (hour: any) => ({
            time: hour.time.split(' ')[1], //extrair apenas o horário
            temp: hour.temp_c,
            feelslike: hour.feelslike_c,
            condition: {
              text: hour.condition.text,
            },
          })
        )
        setForecastHours(forecastHours)

        return weatherData
      } else {
        console.error('Erro ao buscar dados do clima:', weatherData)
        return null
      }
    } catch (error) {
      console.error('Erro ao buscar dados do clima:', error)
      return null
    }
  }
  return (
    <weatherContext.Provider
      value={{
        fetchWeatherData,
        resetWeatherData,
        locationData,
        currentWeather,
        forecastDays,
        forecastHours,
      }}
    >
      {children}
    </weatherContext.Provider>
  )
}
