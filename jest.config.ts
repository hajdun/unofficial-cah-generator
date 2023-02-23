import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: [
    '<rootDir>'
  ],
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest'
}

export default config