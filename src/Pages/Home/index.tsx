'use client'
import { useWeather } from '@/weatherContext'
import Hero from './Hero'
import PeriodNav from './PeriodNav'
import HeroNull from './Hero/HeroNull'

export default function HomePage() {
  const { weatherData } = useWeather()

  if (!weatherData) {
    return <HeroNull />
  }
  return (
    <>
      <PeriodNav />
      <Hero />
    </>
  )
}
