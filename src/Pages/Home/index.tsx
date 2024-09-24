'use client'
import { useWeather } from '@/weatherContext'
import Hero from './Hero'
import PeriodNav from './PeriodNav'
import HeroNull from './Hero/HeroNull'
import Today from './Forecast/Today'
import { useState } from 'react'
import Hourly from './Forecast/Hourly'
import Days from './Forecast/Days'

export default function HomePage() {
  const { weatherData } = useWeather()
  const [selectedPeriod, setSelectedPeriod] = useState<string>('')

  const renderPeriod = () => {
    switch (selectedPeriod) {
      case 'today':
        return <Today />
      case 'hourly':
        return <Hourly />
      case '3 days':
        return <Days />
      default:
        return null
    }
  }

  if (!weatherData) {
    return <HeroNull />
  }

  return (
    <>
      <PeriodNav selectedItem={selectedPeriod} onSelect={setSelectedPeriod} />
      <Hero />
      {renderPeriod()}
    </>
  )
}
