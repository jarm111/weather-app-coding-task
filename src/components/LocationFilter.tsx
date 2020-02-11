import React from 'react'

const LocationFilter = () => {
  return (
    <select defaultValue="All Locations">
      <option value="All Locations">All Cities</option>
      <option value="Tampere">Tampere</option>
      <option value="Jyväskylä">Jyväskylä</option>
      <option value="Helsinki">Helsinki</option>
      <option value="Kuopio">Kuopio</option>
    </select>
  )
}

export default LocationFilter
