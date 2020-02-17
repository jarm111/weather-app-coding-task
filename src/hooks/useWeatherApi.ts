import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationData from '../types/LocationData'
import apiDataParser from '../utils/apiDataParser'

const useWeatherApi = () => {
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

  return { locations, isError }
}

export default useWeatherApi
