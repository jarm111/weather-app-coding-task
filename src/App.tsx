import React from 'react'
import Heading from './components/Heading'
import LocationFilter from './components/LocationFilter'
import Location from './components/Location'
import LocationData from './types/LocationData'

const App = () => {
  const location: LocationData = {
    name: 'Helsinki',
    id: 658225,
    forecasts: [
      {
        id: 1581346800,
        date: '2020-02-15 09:00:00',
        icon: '*icon*',
        temp: 3.13,
        wind: 4.1,
        humidity: 82,
        rain: 0.31,
        description: 'scattered clouds'
      },
      {
        id: 1581345420,
        date: '2020-02-15 12:00:00',
        icon: '*icon*',
        temp: 3.13,
        wind: 4.1,
        humidity: 82,
        rain: 0.31,
        description: 'scattered clouds'
      },
      {
        id: 1581345430,
        date: '2020-02-15 15:00:00',
        icon: '*icon*',
        temp: 2.13,
        wind: 7.1,
        humidity: 56,
        rain: 0,
        description: 'clear sky'
      }
    ]
  }

  return (
    <div>
      <Heading />
      <LocationFilter />
      <Location location={location} />
    </div>
  )
}

export default App
