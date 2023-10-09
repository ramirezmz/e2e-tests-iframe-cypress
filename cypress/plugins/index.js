import cypressEslint from 'cypress-eslint-preprocessor'

export default (on) => {
  on('file:preprocessor', cypressEslint())
}
