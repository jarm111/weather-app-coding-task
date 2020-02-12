import React from 'react'
import Forecast, { ForecastData } from '../components/Forecast'

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
