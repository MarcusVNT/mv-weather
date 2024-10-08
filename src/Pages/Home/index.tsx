'use client'
import { useWeather } from '@/weatherContext'
import Hero from './Hero'
import PeriodNav from './PeriodNav'
import HeroNull from './Hero/HeroNull'
import Today from './Forecast/Today'
import Hourly from './Forecast/Hourly'
import Days from './Forecast/Days'
import { useSelectedPeriod } from '@/selectedPeriodContext'
import Astro from './Forecast/Astro'

export default function HomePage() {
  const { currentWeather } = useWeather()
  const { selectedPeriod } = useSelectedPeriod()

  const renderPeriod = () => {
    switch (selectedPeriod) {
      case 'today':
        return <Today />
      case 'hourly':
        return <Hourly />
      case '3 days':
        return <Days />
      case 'astro':
        return <Astro />
      default:
        return null
    }
  }

  if (!currentWeather) {
    return <HeroNull />
  }

  return (
    <>
      <PeriodNav />
      <Hero />
      {renderPeriod()}
    </>
  )
}
