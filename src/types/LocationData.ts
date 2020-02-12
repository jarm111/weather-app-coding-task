import ForecastData from './ForeCastData'

type LocationData = Readonly<{
  id: number
  name: string
  forecasts: ForecastData[]
}>

export default LocationData
