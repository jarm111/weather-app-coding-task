import React from 'react'
import ForecastData from '../types/ForeCastData'

type Props = {
  name: string
  currentWeather: ForecastData
}

const CurrentWeather = ({ name, currentWeather }: Props) => {
  const { date, description, icon, temp, wind, humidity, rain } = currentWeather
  const splitDate = new Date(date).toString().split(' ')
  const monthAndDay = `${splitDate[1]} ${splitDate[2]}`
  const time = splitDate[4].slice(0, 5)

  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{icon}</div>
      <div>{temp} °C</div>
      <div>{monthAndDay}</div>
      <div>{time}</div>
      <div>Wind: {wind} m/s</div>
      <div>Humidity: {humidity} %</div>
      <div>Precipitation (3h): {rain} mm</div>
    </div>
  )
}

export default CurrentWeather
