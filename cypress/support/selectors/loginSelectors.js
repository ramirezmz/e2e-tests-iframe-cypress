export default {
  getWelcomeMessage () {
    // TODO: Replace to a more specific selector
    return cy.get('.primary--text.view-title-2.mb-4')
  },
  getEmailInput () {
    return cy.get('[id=input-12]')
  },
  getSubmitButton () {
    return cy.get('[class="mb-10 primary v-btn v-btn--block v-btn--depressed theme--dark v-size--default"]')
  },
  getLabelPassword () {
    return cy.get('[class="white pa-6 col"]')
  },
  getPasswordInput () {
    return cy.get('[class="v-input__slot"]')
  },
  getShowPassword () {
    return cy.get('[class="v-input__append-inner"]')
  },
  getSubmitButtonPassword () {
    return cy.get(
      '[class="mb-3 primary v-btn v-btn--block v-btn--depressed theme--dark v-size--default"]'
    )
  },
  getCircleLoader () {
    return cy.get('.circle-loader')
  }
}
