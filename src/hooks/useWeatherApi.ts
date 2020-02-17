import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationData from '../types/LocationData'
import apiDataParser from '../utils/apiDataParser'

type Location = {
  name: string
  id: string
}

const locationsMap: Array<Location> = [
  { name: 'Helsinki', id: '658225' },
  { name: 'Tampere', id: '634964' },
  { name: 'Jyväskylä', id: '655195' },
  { name: 'Kuopio', id: '650225' }
]

const getUrl = (id: string, key: string): string => {
  return `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=${key}`
}

const apiKey = process.env.REACT_APP_API_KEY || ''

const useWeatherApi = () => {
  const [locations, setLocations] = useState<Array<LocationData> | null>(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const requests = locationsMap.map(location => {
        return axios.get(getUrl(location.id, apiKey))
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
