import login from '../../support/actions/login.js'
import home from '../../support/actions/home.js'
import comunicados from '../../support/actions/comunicados.js'
// import { CREATE_QUIZ } from '../../support/data/mock.js'

describe('Announcements', () => {
  beforeEach(() => {
    login.visitPage()
  })
  it('The user should be able to create an announcement.', () => {
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

    // Acessar comunicados sidebar
    comunicados.clickQuizSidebar('Enquetes')
    // Click nova publicacao
    comunicados.clickCreateQuizOptionButton()
    // Click criar publicacao informativa
    comunicados.clickInformativeOptionPopup()
    // Título do comunicado
    comunicados.inputTitleQuiz('Informamos aos colegas que este texto é um teste automatizado.')

    // Descrição do comunicado
    comunicados.inputDescriptionQuiz('Informamos aos colegas que este texto é um teste automatizado. Não há nada a ser feito.')

    // Para quem enviar
    comunicados.selectSendQuizToAll()
    comunicados.shouldLookingForQuizList()
    comunicados.clickCheckboxAllUser()
    comunicados.clickSavedSendQuiz()

    // Quem pode ver esta publicação?
    comunicados.selectQhoCanSeeQuiz(['Papai'])
    // Qual a categoria?
    comunicados.clickCategorySpace('Category')
    // Enviar
    comunicados.clickSendQuizButton()
    comunicados.ensurePopupMessageQuiz()
    comunicados.clickConfirmSendQuizButton()
    // Verificar se o comunicado foi enviado
    comunicados.ensurePopupMessageQuizSuccess()

    // Click nos comunicados Side bar
    comunicados.clickComunicadosSidebar()

    // Buscar comunicado pelo titulo
    comunicados.searchComunicado('Informamos aos colegas que este texto é um teste automatizado.')

    // Visualizar comunicado
    comunicados.clickViewComunicado()

    // Verificar se as informações estão corretas
    comunicados.ensureTitleComunicado('Informamos aos colegas que este texto é um teste automatizado.')
    comunicados.ensureDescriptionComunicado('Informamos aos colegas que este texto é um teste automatizado. Não há nada a ser feito.')
    comunicados.ensureCreatedAuthorComunicado('Roberto Ramirez')
  })
})
