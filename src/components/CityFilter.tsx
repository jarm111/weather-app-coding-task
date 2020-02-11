import React from 'react'

const CityFilter = () => {
  return (
    <select defaultValue="All Cities">
      <option value="All Cities">All Cities</option>
      <option value="Tampere">Tampere</option>
      <option value="Jyväskylä">Jyväskylä</option>
      <option value="Helsinki">Helsinki</option>
      <option value="Kuopio">Kuopio</option>
    </select>
  )
}

export default CityFilter
