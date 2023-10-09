export default {
  getComunicadosSidebar () {
    return cy.get('a[href="/@staging/portal/@admin:layers-comunicados"]')
  },
  getProgressBarLinear () {
    return cy.get('.l-linear-progress-indeterminate')
  },
  getCommunityBanner () {
    return cy.get('[class="community-banner flex row"]')
  },
  getPopupUpdateInfo () {
    return cy.get('.vue-modals-layout > .content')
  },
  getClosePopupUpdateInfo () {
    return cy.get('.white--text')
  },
  getPopupActiveNotify () {
    return cy.get('.el-icon-close')
  }
}
