import React from 'react'

export interface ForecastData {
  id: number
  time: string
  icon: string
  temp: number
  wind: number
  humidity: number
  rain: number
}

type Props = {
  forecast: ForecastData
}

const Forecast = ({ forecast }: Props) => {
  const { time, icon, temp, wind, humidity, rain } = forecast

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
