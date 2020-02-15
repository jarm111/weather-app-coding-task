import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import LocationData from '../types/LocationData'
import styles from './Location.module.css'

type Props = {
  location: LocationData
}

const Location = ({ location }: Props) => {
  return (
    <div className={styles.container}>
      <CurrentWeather
        name={location.name}
        currentWeather={location.forecasts[0]}
      />
      <div className={styles.forecasts}>
        {location.forecasts.slice(1, 6).map(forecast => (
          <Forecast key={forecast.id} forecast={forecast} />
        ))}
      </div>
    </div>
  )
}

export default Location
