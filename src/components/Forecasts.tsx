import React from 'react'
import Forecast from '../components/Forecast'
import ForecastData from '../types/ForeCastData'

type Props = {
  forecasts: ForecastData[]
}

const Forecasts = ({ forecasts }: Props) => {
  return (
    <div>
      {forecasts.map(forecast => (
        <Forecast key={forecast.id} forecast={forecast} />
      ))}
    </div>
  )
}

export default Forecasts
