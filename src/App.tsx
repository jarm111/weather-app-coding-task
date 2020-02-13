import React from 'react'
import Heading from './components/Heading'
import LocationFilter from './components/LocationFilter'
import Location from './components/Location'
import helsinki from './utils/mock-data/open-weather-api-helsinki-response.json'
import tampere from './utils/mock-data/open-weather-api-tampere-response.json'
import jyvaskyla from './utils/mock-data/open-weather-api-jyvaskyla-response.json'
import kuopio from './utils/mock-data/open-weather-api-kuopio-response.json'
import apiDataParser from './utils/apiDataParser'

const App = () => {
  const locations = apiDataParser([helsinki, jyvaskyla, tampere, kuopio])

  return (
    <div>
      <Heading />
      <LocationFilter />
      {locations.map(location => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  )
}

export default App
