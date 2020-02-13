import React from 'react'
import ForecastData from '../types/ForeCastData'

type Props = {
  forecast: ForecastData
}

const Forecast = ({ forecast }: Props) => {
  const { date, icon, temp, wind, humidity, rain } = forecast
  const time = date
    .toString()
    .split(' ')[4]
    .slice(0, 5)

  return (
    <div>
      <div>
        <div>{time}</div>
        <div>{icon}</div>
        <div>{temp} °C</div>
      </div>
      <div>
        <div>{wind} m/s</div>
        <div>{humidity} %</div>
        <div>{rain} mm</div>
      </div>
    </div>
  )
}

export default Forecast
