import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import Heading from './Heading'
import LocationFilter from './LocationFilter'
import Location from './Location'
import apiDataParser from '../utils/apiDataParser'
import LocationData from '../types/LocationData'
import styles from './App.module.css'

const App = () => {
  const [filter, setFilter] = useState('')
  const [locations, setLocations] = useState<Array<LocationData> | null>(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const cityIds = ['658225', '634964', '655195', '650225']
      const requests = cityIds.map(cityId => {
        return axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
      })
      try {
        const data = (await axios.all(requests)).map(results => results.data)
        setLocations(apiDataParser(data))
      } catch (error) {
        setIsError(true)
      }
    }

    fetchData()
  }, [])

  const returnContent = () => {
    if (isError) {
      return (
        <div className={styles.errorMessage}>
          <span role="img" aria-label="Developer">
            👩‍💻
          </span>{' '}
          Oops, something went wrong...{' '}
          <span role="img" aria-label="Developer">
            👨‍💻
          </span>
        </div>
      )
    }

    if (!locations) {
      return (
        <div className={styles.spinner}>
          <ClipLoader color={'#12dddd'} size="80px" />
        </div>
      )
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
      <Heading />
      <div className={styles.content}>{returnContent()}</div>
    </div>
  )
}

export default App
