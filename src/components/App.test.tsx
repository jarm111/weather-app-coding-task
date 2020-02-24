import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import axios from 'axios'
import App from './App'
import { locations } from '../setupTests'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const dataLocations = locations.map(location => ({
  data: location
}))

describe('App', () => {
  it('displays correct data on successful API request', async () => {
    mockedAxios.all.mockResolvedValue(dataLocations)

    const { getAllByText } = render(<App />)

    await waitForElement(() => getAllByText('Helsinki'))
    expect(getAllByText('Helsinki')).toHaveLength(2)
    expect(getAllByText('Kuopio')).toHaveLength(2)
  })

  it('displays loading indicator when waiting for API request', async () => {
    const { getByTestId } = render(<App />)

    await waitForElement(() => getByTestId('loading'))
  })

  it('displays error message on failed API request', async () => {
    mockedAxios.all.mockRejectedValue(new Error('error'))

    const { getByTestId } = render(<App />)

    await waitForElement(() => getByTestId('error'))
  })
})
