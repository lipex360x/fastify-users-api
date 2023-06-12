import timekeeper from 'timekeeper'

import { calculateUserAge } from '@/core/helpers'

describe('calculateUserAge', () => {
  beforeAll(() => {
    timekeeper.freeze(new Date('2020-01-01 00:00:00'))
  })

  afterAll(() => {
    timekeeper.reset()
  })

  it('should return a age', () => {
    const age = calculateUserAge(new Date('2019-01-01'))

    expect(age).toEqual(1)
  })
})
