import '@testing-library/jest-dom/extend-expect'
import helsinki from './utils/mock-data/open-weather-api-helsinki-response.json'
import tampere from './utils/mock-data/open-weather-api-tampere-response.json'
import jyvaskyla from './utils/mock-data/open-weather-api-jyvaskyla-response.json'
import kuopio from './utils/mock-data/open-weather-api-kuopio-response.json'
import apiDataParser from './utils/apiDataParser'

export const locations = [helsinki, tampere, jyvaskyla, kuopio]
export const parsedLocations = apiDataParser(locations)
