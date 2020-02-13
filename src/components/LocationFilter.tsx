import React from 'react'
import LocationData from '../types/LocationData'

type Props = {
  setFilter: React.Dispatch<string>
  locations: Array<LocationData>
}

const LocationFilter = ({ setFilter, locations }: Props) => {
  return (
    <select onChange={e => setFilter(e.target.value)}>
      <option value="">All Cities</option>
      {locations.map(location => (
        <option key={location.id} value={location.name}>
          {location.name}
        </option>
      ))}
    </select>
  )
}

export default LocationFilter
