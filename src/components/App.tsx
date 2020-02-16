import React, { useState, useEffect } from 'react'
import Heading from './Heading'
import LocationFilter from './LocationFilter'
import Location from './Location'
import helsinki from '../utils/mock-data/open-weather-api-helsinki-response.json'
import tampere from '../utils/mock-data/open-weather-api-tampere-response.json'
import jyvaskyla from '../utils/mock-data/open-weather-api-jyvaskyla-response.json'
import kuopio from '../utils/mock-data/open-weather-api-kuopio-response.json'
import apiDataParser from '../utils/apiDataParser'
import styles from './App.module.css'
import axios from 'axios'

const App = () => {
  const [filter, setFilter] = useState('')
  const locations = apiDataParser([helsinki, jyvaskyla, tampere, kuopio])

  useEffect(() => {
    const fetchData = async () => {
      const cityIds = ['658225', '634964', '655195', '650225']
      const requests = cityIds.map(cityId => {
        return axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
      })
      const data = (await axios.all(requests)).map(results => results.data)
      console.log('results', data)
      console.log('parsed', apiDataParser(data))
    }

    fetchData()
  }, [])

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
