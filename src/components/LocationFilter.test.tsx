import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LocationFilter from './LocationFilter'
import { parsedLocations } from '../setupTests'

const handleSetFilter = jest.fn()
const locations = parsedLocations
const names = parsedLocations.map(l => l.name)

describe('LocationFilter', () => {
  it('has locations as options', () => {
    const { getByText } = render(
      <LocationFilter setFilter={handleSetFilter} locations={locations} />
    )
    names.forEach(name => {
      getByText(name)
    })
  })

  it('fires the event handler', () => {
    const { getByTestId } = render(
      <LocationFilter setFilter={handleSetFilter} locations={locations} />
    )
    fireEvent.change(getByTestId('select'))
    expect(handleSetFilter).toHaveBeenCalledTimes(1)
  })
})
