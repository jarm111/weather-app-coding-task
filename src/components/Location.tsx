import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecasts from './Forecasts'
import LocationData from '../types/LocationData'

type Props = {
  location: LocationData
}

const Location = ({ location }: Props) => {
  return (
    <div>
      <CurrentWeather
        name={location.name}
        currentWeather={location.forecasts[0]}
      />
      <Forecasts forecasts={location.forecasts.slice(1)} />
    </div>
  )
}

export default Location
