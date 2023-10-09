import comunicadosSelectors from '../selectors/comunicadosSelectors'

export default {
  clickComunicadosViewAsAdmin () {
    comunicadosSelectors.getIframeComunicados()
  },
  confirmMainMenuComunicados () {
    comunicadosSelectors
      .getMainMenuTitle()
      .should('be.visible')
      .contains('Comunicados')
  },
  clickQuizSidebar (option) {
    comunicadosSelectors
      .getSidebar()
      .should('be.visible')
      .contains(option)
      .should('be.visible')
      .click()
  },
  clickCreateQuizOptionButton () {
    comunicadosSelectors.getCreateQuiz().should('be.visible').click()
  },
  clickQuizOptionPopup () {
    comunicadosSelectors.getCreateQuizOptionPopup('Enquetes').click()
  },
  clickInformativeOptionPopup () {
    comunicadosSelectors.getCreateQuizOptionPopup('Informativo').click()
  },
  clickClosePopUpUpdateInfo () {
    comunicadosSelectors.getRemovePopUpUpdateInfo().click()
  },
  inputTitleQuiz (title) {
    comunicadosSelectors.getTitleQuiz().type(title).should('have.value', title)
  },
  inputDescriptionQuiz (description) {
    comunicadosSelectors
      .getDescriptionQuiz()
      .should('be.exist')
      .type(description)
  },
  inputDateAtQuiz () {
    comunicadosSelectors
      .getDateAtQuiz()
      .should('be.exist')
      .type('16/05/2023{enter}')
  },
  clickToButtonToAddQuizzes () {
    comunicadosSelectors.getAddQuizOption().should('be.visible').click()
  },
  addNewQuizButton () {
    comunicadosSelectors.getAddNewQuizOption().should('be.visible').click()
  },
  selectTextQuestionOption () {
    comunicadosSelectors
      .getTextQuestionOption()
      .should('be.visible')
      .contains('Pergunta de texto')
      .should('be.visible')
      .click()
  },
  inputTitleTextQuestion (titleTextQuestion) {
    comunicadosSelectors
      .getInputTitleTextQuestion()
      .should('be.visible')
      .type(titleTextQuestion)
      .should('have.value', titleTextQuestion)
  },
  inputDescriptionTextQuestion () {
    comunicadosSelectors
      .getInputDescriptionTextQuestion()
      .should('be.visible')
      .type('Testando descrição da pergunta de texto')
      .should('have.value', 'Testando descrição da pergunta de texto')
  },
  selectMultipleChoiceQuestion () {
    comunicadosSelectors
      .getNextQuestionButton()
      .should('be.visible')
      .contains('Múltipla escolha')
      .should('be.visible')
      .click()
  },
  inputTitleChoiceQuestion (message) {
    comunicadosSelectors
      .getInputTitleTextQuestion()
      .last()
      .should('be.visible')
      .type(message)
      .should('have.value', message)
  },
  inputDescriptionChoiceQuestion (description) {
    comunicadosSelectors
      .getInputDescriptionTextQuestion()
      .last()
      .should('be.visible')
      .type(description)
      .should('have.value', description)
  },
  setThreeOptionsMultipleChoiseQuestion (options) {
    options.forEach((option, index) => {
      if (index === 0) {
        comunicadosSelectors
          .getChoosesQuestionType(index + 1)
          .should('be.visible')
          .clear()
          .type(option)
          .should('have.value', option)
      } else {
        comunicadosSelectors
          .getAddNewOptionButton()
          .should('be.visible')
          .click()
        comunicadosSelectors
          .getChoosesQuestionType(index + 1)
          .should('be.visible')
          .clear()
          .type(option)
          .should('have.value', option)
      }
    })
  },
  selectCheckBoxQuestion () {
    comunicadosSelectors
      .getNextQuestionButton()
      .should('be.visible')
      .contains('Caixas de seleção')
      .should('be.visible')
      .click()
  },
  setFirstOptionCheckBoxQuestion (option) {
    comunicadosSelectors
      .getChoosesQuestionType(1)
      .last()
      .should('be.visible')
      .clear()
      .type(option)
      .should('have.value', option)
  },
  setThreeOptionsCheckBoxQuestion (options) {
    options.forEach((option, index) => {
      if (index === 0) {
        comunicadosSelectors
          .getChoosesQuestionType(index + 1)
          .last()
          .should('be.visible')
          .clear()
          .type(option)
          .should('have.value', option)
      } else {
        comunicadosSelectors
          .getAddNewOptionButton()
          .last()
          .should('be.visible')
          .click()
        comunicadosSelectors
          .getChoosesQuestionType(index + 1)
          .last()
          .should('be.visible')
          .clear()
          .type(option)
          .should('have.value', option)
      }
    })
  },
  selectLinearScaleQuestion () {
    comunicadosSelectors
      .getNextQuestionButton()
      .should('be.visible')
      .contains('Escala linear')
      .should('be.visible')
      .click()
  },
  inputMinMaxScaleQuestion (min, max) {
    comunicadosSelectors
      .getMinMaxOption()
      .first()
      .should('be.visible')
      .clear()
      .type(min)
      .should('have.value', min)
    comunicadosSelectors
      .getMinMaxOption()
      .last()
      .should('be.visible')
      .clear()
      .type(max)
      .should('have.value', max)
  },
  unableObrigatoryQuestion () {
    comunicadosSelectors
      .getSwitchObrigatoryQuestion()
      .last()
      .should('be.visible')
      .click()
  },
  selectFileUploadQuestion () {
    comunicadosSelectors
      .getNextQuestionButton()
      .should('be.visible')
      .contains('Carregamento de arquivos')
      .should('be.visible')
      .click()
  },
  saveQuestion () {
    comunicadosSelectors.getSaveQuestionButton().should('be.visible').click()
  },

  selectSendQuizToAll () {
    comunicadosSelectors.getSendQuizToAll().should('be.visible').click()
  },

  shouldLookingForQuizList () {
    comunicadosSelectors
      .getLookingForPortalQuiz()
      .contains('Procurando')
      .should('be.visible')
  },
  clickCheckboxAllUser () {
    comunicadosSelectors.getCheckboxAllUser().should('be.visible').click()
  },
  selectQhoCanSeeQuiz (array) {
    array.forEach((item, index) => {
      if (index === 0) {
        comunicadosSelectors
          .getWhoCanSeeQuiz()
          .should('be.visible')
          .contains(item)
          .click()
      } else {
        comunicadosSelectors
          .getWhoCanSeeQuiz()
          .last()
          .should('be.visible')
          .contains(item)
          .click()
      }
    })
  },
  clickSavedSendQuiz () {
    comunicadosSelectors
      .getSavedSendQuiz()
      .should('be.visible')
      .click({ force: true })
  },
  clickCategorySpace (category) {
    comunicadosSelectors
      .getCategoriesQuiz()
      .should('be.exist')
      .contains(category)
      .click()
  },
  clickSendQuizButton () {
    comunicadosSelectors.getClickSendQuiz().should('be.visible').click()
  },
  clickConfirmSendQuizButton () {
    comunicadosSelectors.getSendQuiz().should('be.visible').click()
  },
  ensurePopupMessageQuiz () {
    comunicadosSelectors
      .getPopupConfirmSendQuizMessage()
      .contains('Confirmar o envio?')
    comunicadosSelectors
      .getPopupConfirmSendQuizMessage()
      .contains(
        'Esta publicação aparecerá na linha do tempo de todos os destinatários.'
      )
  },
  clickCategoriesSidebar () {
    comunicadosSelectors
      .getCategoriesSidebar()
      .contains('Categorias')
      .should('be.visible')
      .click()
  },

  clickCreateCategoryButton () {
    comunicadosSelectors.getCreateCategoryButton().should('be.visible').click()
  },

  ensureModalCreateCategoryIsVisible () {
    comunicadosSelectors.getModalCreateCategory().should('be.visible')
  },
  ensureModalTitleCreateCategoryIsVisible () {
    comunicadosSelectors
      .getModalCreateCategory()
      .contains('Nome da categoria')
      .should('be.visible')
  },
  ensureModalTitleColorsCategoryIsVisible () {
    comunicadosSelectors
      .getModalCreateCategory()
      .contains('Cor da categoria')
      .should('be.visible')
  },
  ensureModalButtonCancelIsVisible () {
    comunicadosSelectors
      .getModalButtonCancelCreateCategory()
      .should('be.visible')
  },
  ensureModalButtonSaveIsVisible () {
    comunicadosSelectors
      .getModalButtonSaveCreateCategory()
      .should('be.visible')
  },
  setCategoryName (categoryName) {
    comunicadosSelectors
      .getInputCategoryName()
      .should('be.visible')
      .type(categoryName)
      .should('have.value', categoryName)
  },
  selectCategoryColor () {
    comunicadosSelectors
      .getSelectCategoryColor()
      .last()
      .should('be.visible')
      .click()
  },
  clickSaveCategoryButton () {
    comunicadosSelectors
      .getModalButtonSaveCreateCategory()
      .should('be.visible')
      .click({ force: true })
  },
  ensureMessageSuccess () {
    comunicadosSelectors.getSuccessMessageNotification().should('be.visible')
  },
  clickEditCategoryButton () {
    comunicadosSelectors
      .getEditCategoryButton()
      .first()
      .contains('Alterar')
      .click()
  },
  ensureCategoryNameIsVisible (categoryName) {
    comunicadosSelectors
      .getInputCategoryName()
      .should('be.visible')
      .should('have.value', categoryName)
  },
  clickArchiveCategoryButton () {
    comunicadosSelectors.getArchiveCategoryButton().first().click()
  },
  ensurePopupMessageArchiveCategory () {
    comunicadosSelectors
      .getPopupConfirmArchiveCategoryMessage()
      .contains('Arquivar esta categoria?')
    comunicadosSelectors
      .getPopupConfirmArchiveCategoryMessage()
      .contains('As publicações nesta categoria não irão desaparecer.')
  },
  ensurePopupButtonCancelArchiveCategory () {
    comunicadosSelectors
      .getPopupButtonCancelArchiveCategory()
      .should('be.visible')
    comunicadosSelectors.getPopupButtonArquiveCategory().should('be.visible')
  },
  clickConfirmArchiveCategoryButton () {
    comunicadosSelectors
      .getPopupButtonArquiveCategory()
      .should('be.visible')
      .click()
  },
  ensurePopupMessageQuizSuccess () {
    comunicadosSelectors.getPopupMessageQuizSuccess().should('be.visible')
  },
  goToMyFeed () {
    comunicadosSelectors
      .getSidebar()
      .should('be.visible')
      .contains('Meu feed')
      .click()
    comunicadosSelectors.getLoading().should('be.visible')
  },
  ensurePendingQuiz () {
    comunicadosSelectors
      .getPendingQuiz()
      .should('be.visible')
      .contains('pendências para responder')
  },
  clickPendingQuiz (quizTitle) {
    comunicadosSelectors.getPendingQuiz().should('be.visible').click()
    comunicadosSelectors
      .getQuizName()
      .contains(quizTitle)
      .should('be.visible')
      .click()
    comunicadosSelectors.getLoadingQuiz().should('be.visible')
  },
  ensureTitleQuiz (title) {
    comunicadosSelectors.getQuizTitle().contains(title).should('be.visible')
  },
  ensureDescriptionQuiz (description) {
    comunicadosSelectors
      .getQuizDescription()
      .contains(description)
      .should('be.visible')
  },
  inputAnswerTextQuestion (answer) {
    comunicadosSelectors
      .getAnswerTextQuestion()
      .should('be.visible')
      .type(answer)
      .should('have.value', answer)
  },
  clickOptionMultipleChoiceQuestion (answer) {
    comunicadosSelectors.getOptionMultipleChoiceQuestion().contains(answer).click()
  },
  clickOptionCheckBoxQuestion (array) {
    array.forEach((item, index) => {
      if (index === 0) {
        comunicadosSelectors
          .getOptionCheckBoxQuestion()
          .contains(item)
          .click()
      } else {
        comunicadosSelectors
          .getOptionCheckBoxQuestion()
          .last()
          .contains(item)
          .click()
      }
    })
  },
  clickOptionLinearScaleQuestion (answerNumber) {
    comunicadosSelectors.getOptionLinearScaleQuestion().should('be.visible')
    comunicadosSelectors.getScaleChoiceQuestion().eq(answerNumber).click()
  },
  uploadFileQuestion () {
    cy.fixture('space.jpeg', { encoding: null }).as('myFile')
    comunicadosSelectors.getUploadFileQuestion().invoke('show').selectFile('@myFile').invoke('hide')

    comunicadosSelectors.getAttachmentFileQuestionContent().should('be.visible').contains('space.jpeg')
  },
  clickSendAnswerQuizButton () {
    comunicadosSelectors.getSendAnswerQuizButton().should('be.visible').click()
    comunicadosSelectors.getPopupAreYouSureMessage().should('be.visible')
    comunicadosSelectors.getPopupAreYouSureMessage().should('be.visible').contains('Tem certeza que deseja enviar as respostas?')
    comunicadosSelectors.getPopupAreYouSureMessage().should('be.visible').contains('Após o envio não será possível editar as informações.')
    comunicadosSelectors.getConfirmButtons('Enviar').click()
  },
  clickQuizCreated () {
    comunicadosSelectors.getQuizCreated().contains('Testing e2e with cypress').should('be.visible').click()
  },
  clickViewAdminAnswered () {
    comunicadosSelectors.getViewAnswered().should('be.visible').click()
  },
  clickViewAdminIndividual () {
    comunicadosSelectors.getViewIndividual().should('be.visible').click()
  },
  checkPersonAnswered (name) {
    comunicadosSelectors.getPersonAnswered().contains(name).should('be.visible')
    comunicadosSelectors.getPersonAnsweredIsOnTheList().contains(name).should('be.visible')
  },
  clickComunicadosSidebar () {
    comunicadosSelectors.getComunicadosSidebar().click()
  },
  searchComunicado (title) {
    comunicadosSelectors.getSearchComunicado().should('be.visible').type(title).should('have.value', title)
  },

  clickViewComunicado () {
    comunicadosSelectors.getViewComunicado().first().should('be.visible').click()
  },
  ensureTitleComunicado (title) {
    comunicadosSelectors.getBodyComunicado().contains(title).should('be.visible')
  },
  ensureDescriptionComunicado (description) {
    comunicadosSelectors.getBodyComunicado().contains(description).should('be.visible')
  },
  ensureCreatedAuthorComunicado (author) {
    comunicadosSelectors.getBodyComunicado().contains(author).should('be.visible')
  }
}
