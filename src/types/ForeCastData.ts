type ForecastData = Readonly<{
  id: number
  date: string
  icon: string
  temp: number
  wind: number
  humidity: number
  rain: number
  description: string
}>

export default ForecastData
