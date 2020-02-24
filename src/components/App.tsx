import React, { useState } from 'react'
import useWeatherApi from '../hooks/useWeatherApi'
import Heading from './Heading'
import LocationFilter from './LocationFilter'
import Location from './Location'
import ErrorMessage from './ErrorMessage'
import LoadingSpinner from './LoadingSpinner'
import styles from './App.module.css'

const App = () => {
  const [filter, setFilter] = useState('')
  const { locations, isError } = useWeatherApi()

  const returnContent = () => {
    if (isError) {
      return <ErrorMessage />
    }

    if (!locations) {
      return <LoadingSpinner />
    }

    return (
      <React.Fragment>
        <LocationFilter setFilter={setFilter} locations={locations} />
        {locations
          .filter(location => !filter || location.name === filter)
          .map(location => (
            <Location key={location.id} location={location} />
          ))}
      </React.Fragment>
    )
  }

  return (
    <div>
      <Heading content="Weather Radar" />
      <div className={styles.content}>{returnContent()}</div>
    </div>
  )
}

export default App
