module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/*.spec.js'],
  transformIgnorePatterns: ['/node_modules/']
}
