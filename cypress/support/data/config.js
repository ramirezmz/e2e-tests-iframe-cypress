const baseUrl = Cypress.env('env').DEV_BASE_URL
const email = Cypress.env('env').DEV_EMAIL
const password = Cypress.env('env').DEV_PASSWORD

const softwareLogin = {
  baseUrl,
  email,
  password
}

export { softwareLogin }
