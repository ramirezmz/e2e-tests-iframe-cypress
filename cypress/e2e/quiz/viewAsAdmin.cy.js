import login from '../../support/actions/login.js'
import home from '../../support/actions/home.js'
import comunicados from '../../support/actions/comunicados.js'
import { VIEW_AS_ADMIN_QUIZ } from '../../support/data/mock.js'

describe('Quizzes', () => {
  beforeEach(() => {
    login.visitPage()
  })
  it('The admin user should be able to view how many people was answered till now with individual answers', () => {
    login.ensureCircleLoaderIsVisible()

    login.confirmWelcomeMessage()
    login.setInputEmail()
    login.clickContinueButton()
    login.confirmLabelPassword()
    login.setInputPassword()
    login.showPasswordButton()
    login.getSubmitButtonPassword()
    home.interceptAmplitude()
    cy.wait('@amplitude')

    // home.handlePopUpUpdateInfo()
    // home.removePopupUpdateInfo()
    // home.handlePopupActiveNotify()

    home.showCommunityBanner()
    home.clickComunicadosSidebar()
    home.showBeShowLinearProgressBar()

    comunicados.confirmMainMenuComunicados()
    // remove pop up de atualização enquete
    comunicados.clickClosePopUpUpdateInfo()

    // Acessar enquete
    comunicados.clickQuizSidebar('Enquetes')

    // Acessar enquete criada anteriormente
    comunicados.clickQuizCreated()

    // Acessar porcentagem de pessoas que responderam
    comunicados.clickViewAdminAnswered()

    // Acessar aba individual
    comunicados.clickViewAdminIndividual()

    // Verificar se a pessoa que respondeu está na lista
    comunicados.checkPersonAnswered(VIEW_AS_ADMIN_QUIZ.username_answered)
  })
})
