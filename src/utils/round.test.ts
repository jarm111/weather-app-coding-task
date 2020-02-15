import round from './round'

describe('round', () => {
  test('rounds to whole integer', () => {
    expect(round(3.51, 0)).toBe(4)
  })
  test('rounds to one decimal', () => {
    expect(round(3.51, 1)).toBe(3.5)
  })
})
