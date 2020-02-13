import LocationData from '../types/LocationData'

const apiDataParser = (locations: Array<any>): Array<LocationData> => {
  return locations.map(location => {
    return {
      name: location.city.name,
      id: location.city.id,
      forecasts: location.list.map((forecast: any) => {
        return {
          id: forecast.dt,
          date: new Date(forecast.dt_txt),
          icon: forecast.weather[0].icon,
          temp: forecast.main.temp,
          wind: forecast.wind.speed,
          humidity: forecast.main.humidity,
          rain: forecast.rain ? forecast.rain['3h'] : 0,
          description: forecast.weather[0].description
        }
      })
    }
  })
}

export default apiDataParser
