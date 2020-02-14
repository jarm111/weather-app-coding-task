import React from 'react'
import ForecastData from '../types/ForeCastData'
import styles from './Forecast.module.css'

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
    <div className={styles.container}>
      <div>
        <div className={styles.time}>{time}</div>
        <div>{icon}</div>
        <div className={styles.temp}>{temp} °C</div>
      </div>
      <div className={styles.bottomPart}>
        <div>{wind} m/s</div>
        <div>{humidity} %</div>
        <div>{rain} mm</div>
      </div>
    </div>
  )
}

export default Forecast
