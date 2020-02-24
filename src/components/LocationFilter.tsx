import React from 'react'
import LocationData from '../types/LocationData'
import styles from './LocationFilter.module.css'

type Props = {
  setFilter: React.Dispatch<string>
  locations: Array<LocationData>
}

const LocationFilter = ({ setFilter, locations }: Props) => {
  const handleChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    setFilter(event.currentTarget.value)
  }

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        onChange={handleChange}
        data-testid="select"
      >
        <option value="">All Cities</option>
        {locations.map(location => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LocationFilter
