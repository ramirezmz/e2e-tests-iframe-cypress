import comunicados from '../../support/actions/comunicados'
import home from '../../support/actions/home'
import login from '../../support/actions/login'

describe('Categories', () => {
  context('Create', function () {
    beforeEach(() => {
      login.visitPage()
    })
    it('The user should be able to create category', () => {
      // Login
      login.ensureCircleLoaderIsVisible()

      login.confirmWelcomeMessage()
      login.setInputEmail()
      login.clickContinueButton()
      login.confirmLabelPassword()
      login.setInputPassword()
      // login.showPasswordButton()
      login.getSubmitButtonPassword()

      // Home
      home.interceptAmplitude()
      cy.wait('@amplitude')

      // Comunicados - Sidebar

      home.showCommunityBanner()
      home.clickComunicadosSidebar()
      home.showBeShowLinearProgressBar()

      // remover pop up de atualização
      comunicados.clickClosePopUpUpdateInfo()

      // Clicar em Categorias
      comunicados.clickCategoriesSidebar()

      // Clicar em Criar categoria
      comunicados.clickCreateCategoryButton()

      // Garantir que o modal de criar categoria está aberto
      comunicados.ensureModalCreateCategoryIsVisible()
      comunicados.ensureModalTitleCreateCategoryIsVisible()
      comunicados.ensureModalTitleColorsCategoryIsVisible()
      comunicados.ensureModalButtonCancelIsVisible()
      comunicados.ensureModalButtonSaveIsVisible()

      // Preencher o nome da categoria
      comunicados.setCategoryName('CategoriaTeste1')

      // Selecionar a cor da categoria
      comunicados.selectCategoryColor()

      // Clicar em salvar
      comunicados.clickSaveCategoryButton()

      // Garantir messagem de sucesso
      comunicados.ensureMessageSuccess()
    })
  })
})
