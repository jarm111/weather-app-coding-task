import React from 'react'
import Forecast from '../components/Forecast'

const Forecasts = () => {
  const entries = [0, 1, 2, 3, 4, 5]

  return (
    <div>
      {entries.map(entry => (
        <Forecast key={entry} />
      ))}
    </div>
  )
}

export default Forecasts
