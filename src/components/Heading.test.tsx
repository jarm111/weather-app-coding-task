import React from 'react'
import { render } from '@testing-library/react'
import Heading from './Heading'

describe('Heading', () => {
  it('renders content', () => {
    const content = 'Testing heading'
    const { queryByText } = render(<Heading content={content} />)
    expect(queryByText(content)).toBeTruthy()
  })
})
