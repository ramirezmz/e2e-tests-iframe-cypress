const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    pageLoadTimeout: 10000,
    chromeWebSecurity: false
  }
})