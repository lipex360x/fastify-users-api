import type { Config } from 'jest'

export default <Config>{
  preset: 'ts-jest',

  collectCoverageFrom: ['!<rootDir>/test/**/*.ts'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
}
