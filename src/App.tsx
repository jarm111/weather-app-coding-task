import React, { useState } from 'react'
import Heading from './components/Heading'
import LocationFilter from './components/LocationFilter'
import Location from './components/Location'
import helsinki from './utils/mock-data/open-weather-api-helsinki-response.json'
import tampere from './utils/mock-data/open-weather-api-tampere-response.json'
import jyvaskyla from './utils/mock-data/open-weather-api-jyvaskyla-response.json'
import kuopio from './utils/mock-data/open-weather-api-kuopio-response.json'
import apiDataParser from './utils/apiDataParser'
import styles from './App.module.css'

const App = () => {
  const [filter, setFilter] = useState('')
  const locations = apiDataParser([helsinki, jyvaskyla, tampere, kuopio])

  return (
    <div>
      <Heading />
      <div className={styles.content}>
        <LocationFilter setFilter={setFilter} locations={locations} />
        {locations
          .filter(location => !filter || location.name === filter)
          .map(location => (
            <Location key={location.id} location={location} />
          ))}
      </div>
    </div>
  )
}

export default App
