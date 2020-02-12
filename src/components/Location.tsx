import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecasts from './Forecasts'
import { ForecastData } from '../components/Forecast'

const Location = () => {
  const forecasts: ForecastData[] = [
    {
      id: 1581346800,
      time: '15:00',
      icon: '*icon*',
      temp: 3.13,
      wind: 4.1,
      humidity: 82,
      rain: 0.31
    },
    {
      id: 1581332500,
      time: '18:00',
      icon: '*icon*',
      temp: 3.13,
      wind: 5.1,
      humidity: 90,
      rain: 0.32
    }
  ]

  return (
    <div>
      <CurrentWeather />
      <Forecasts forecasts={forecasts} />
    </div>
  )
}

export default Location
