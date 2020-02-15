import React from 'react'
import ForecastData from '../types/ForeCastData'
import styles from './CurrentWeather.module.css'
import round from '../utils/round'

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
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <div className={styles.name}>{name}</div>
          <div className={styles.smallText}>{description}</div>
        </div>
        <div className={styles.topRight}>
          <div>{icon}</div>
          <div className={styles.temp}>{round(temp, 0)} °C</div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
          <div className={styles.date}>{monthAndDay}</div>
          <div className={styles.smallText}>{time}</div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.smallText}>Wind: {round(wind, 1)} m/s</div>
          <div className={styles.smallText}>Humidity: {humidity} %</div>
          <div className={styles.smallText}>
            Precipitation (3h): {round(rain, 1)} mm
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
