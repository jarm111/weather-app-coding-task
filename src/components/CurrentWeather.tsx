import React from 'react'
import ForecastData from '../types/ForeCastData'
import styles from './CurrentWeather.module.css'

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
      <div className={styles.topLeft}>
        <div className={styles.name}>{name}</div>
        <div className={styles.smallText}>{description}</div>
      </div>
      <div className={styles.topRight}>
        <div>{icon}</div>
        <div className={styles.temp}>{temp} °C</div>
      </div>
      <div className={styles.bottomLeft}>
        <div>
          <div className={styles.date}>{monthAndDay}</div>
          <div className={styles.smallText}>{time}</div>
        </div>
      </div>
      <div className={styles.bottomRight}>
        <div>
          <div className={styles.smallText}>Wind: {wind} m/s</div>
          <div className={styles.smallText}>Humidity: {humidity} %</div>
          <div className={styles.smallText}>Precipitation (3h): {rain} mm</div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
