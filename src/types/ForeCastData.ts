type ForecastData = Readonly<{
  id: number
  date: Date
  icon: string
  temp: number
  wind: number
  humidity: number
  rain: number
  description: string
}>

export default ForecastData
