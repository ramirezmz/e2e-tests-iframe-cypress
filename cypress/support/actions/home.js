import homeSelectors from '../selectors/homeSelectors'

export default {
  interceptAmplitude () {
    cy.intercept('POST', 'https://api.amplitude.com').as('amplitude')
  },
  showBeShowLinearProgressBar () {
    homeSelectors.getProgressBarLinear().should('be.visible')
  },
  clickComunicadosSidebar () {
    homeSelectors.getComunicadosSidebar().should('be.visible').click()
  },
  showCommunityBanner () {
    homeSelectors.getCommunityBanner().should('be.visible')
  },
  handlePopUpUpdateInfo () {
    homeSelectors.getPopupUpdateInfo().should('be.visible')
  },
  removePopupUpdateInfo () {
    homeSelectors.getClosePopupUpdateInfo().should('be.visible').click()
  },
  handlePopupActiveNotify () {
    homeSelectors.getPopupActiveNotify().should('be.visible').click()
  }
}
