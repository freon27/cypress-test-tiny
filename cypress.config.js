
const mdPreprocessor = require('cypress-markdown-preprocessor')

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', mdPreprocessor)
      return config
    },
  },
}
