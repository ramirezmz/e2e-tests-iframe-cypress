import loginSelectors from '../selectors/loginSelectors'
import { LOGIN } from '../data/mock'
import { softwareLogin } from '../data/config'

export default {
  confirmWelcomeMessage () {
    loginSelectors.getWelcomeMessage().contains(LOGIN.welcomeMessage)
  },
  visitPage () {
    cy.visit(softwareLogin.baseUrl)
  },
  setInputEmail () {
    loginSelectors.getEmailInput().type(softwareLogin.email).should('have.value', softwareLogin.email)
  },
  clickContinueButton () {
    loginSelectors.getSubmitButton().click()
  },
  confirmLabelPassword () {
    loginSelectors.getLabelPassword().contains(
      'Digite sua senha para acessar a plataforma'
    )
  },
  setInputPassword () {
    loginSelectors.getPasswordInput().type(softwareLogin.password)
  },
  showPasswordButton () {
    loginSelectors.getShowPassword().click()
  },
  getSubmitButtonPassword () {
    loginSelectors.getSubmitButtonPassword().click()
  },
  ensureCircleLoaderIsVisible () {
    loginSelectors.getCircleLoader().should('be.visible')
    cy.wait(500)
  }
}
