import React from 'react'
import ForecastData from '../types/ForeCastData'
import styles from './Forecast.module.css'
import round from '../utils/round'
import getWeatherIcon from '../utils/getWeatherIcon'

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
        <div>
          <img src={getWeatherIcon(icon)} alt="Weather icon" />
        </div>
        <div className={styles.temp}>{round(temp, 0)} °C</div>
      </div>
      <div className={styles.bottomPart}>
        <div>{round(wind, 1)} m/s</div>
        <div>{humidity} %</div>
        <div>{round(rain, 1)} mm</div>
      </div>
    </div>
  )
}

export default Forecast
