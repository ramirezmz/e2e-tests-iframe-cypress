export default {
  // TODO: Improve selectors
  getMainMenuTitle () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="main-menu web-main-menu"]')
  },
  getSidebar () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="main-menu web-main-menu"]')
  },
  getCreateQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button el-button--primary"]')
  },
  getCreateQuizOptionPopup (option) {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="px-3 py-3"').should('be.visible').contains(option)
  },
  getRemovePopUpUpdateInfo () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button close-button el-button--info el-button--mini is-fab"]')
  },
  getTitleQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Escreva aqui o título..."]').should('be.exist')
  },
  getDescriptionQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="ProseMirror"]')
  },
  getDateAtQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date l-date-picker"]')
  },
  getAddQuizOption () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="quiz-select"]').contains('Adicionar perguntas')
  },
  getAddNewQuizOption () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Adicionar nova pergunta"]')
  },
  getTextQuestionOption () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-scrollbar__view el-select-dropdown__list"]')
  },
  getInputTitleTextQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Digite o título da pergunta..."]')
  },
  getInputDescriptionTextQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Digite a descrição da pergunta..."]')
  },
  getNextQuestionButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-select-dropdown__wrap el-scrollbar__wrap"]')
  },
  getScrollContentNewQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="vue-modals-layout"]')
  },
  getChoosesQuestionType (questionNumber) {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find(`[placeholder="Opção ${questionNumber}"]`)
  },
  getAddNewOptionButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="row field-choice cursor-pointer mr-2"]')
  },
  getMinMaxOption () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Marcador"]')
  },
  getSwitchObrigatoryQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-switch is-checked l-switch"]')
  },
  getSaveQuestionButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button bold action-button f-14 ml-2 el-button--primary el-button--small"]')
  },
  getWhichCategoryCards () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="post-category-wrapper mb-3 px-3"]')
  },

  getSendQuizToAll () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="targets-topics-input l-d-flex l-align-items-center "]')
  },
  getLookingForPortalQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="px-0 py-2 l-container scroll-y l-flex-grow-1"]')
  },

  getCheckboxAllUser () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-checkbox l-checkbox"]')
  },

  getSavedSendQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button bold l-d-flex l-align-items-center f-14 ml-2 el-button--primary"]')
  },

  getWhoCanSeeQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="post-targets-roles-wrapper mb-3 px-3"]')
  },

  getCategoriesQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="post-category-wrapper mb-3 px-3"]')
  },
  getClickSendQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button bold action-button f-14 ml-2 el-button--primary"]')
  },
  getSendQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button bold m-0 dialog-button confirm-button-dialog el-button--primary"]')
  },
  getPopupConfirmSendQuizMessage () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="prompt-dialog l-prompt-dialog"]').should('exist')
  },
  getCategoriesSidebar () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="main-menu web-main-menu"]')
  },
  getCreateCategoryButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="aqua--text"]')
  },
  getModalCreateCategory () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="category-editor-content l-flex l-transition-expand"]')
  },
  getModalButtonCancelCreateCategory () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-d-flex mb-4"]').contains('Cancelar')
  },
  getModalButtonSaveCreateCategory () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-d-flex mb-4"]').contains('Salvar alterações')
  },
  getInputCategoryName () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Escolha um nome para sua categoria"]')
  },
  getSelectCategoryColor () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-d-flex l-flex-wrap category-colors-options"]')
  },
  getSuccessMessageNotification () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-notification success right"]')
  },
  getEditCategoryButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button el-button--text"]')
  },
  getArchiveCategoryButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button el-button--text"]')
  },
  getPopupConfirmArchiveCategoryMessage () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="prompt-dialog l-prompt-dialog"]').should('exist')
  },
  getPopupButtonCancelArchiveCategory () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-d-flex mt-4 prompt-buttons"]').contains('Cancelar')
  },
  getPopupButtonArquiveCategory () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-d-flex mt-4 prompt-buttons"]').contains('Arquivar')
  },
  getPopupMessageQuizSuccess () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-notification success center"]').should('exist')
  },

  getLoading () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-linear-progress linear-loading"]')
  },
  getPendingQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find(`[class="
      pendencies-banner
      mb-3
      px-3
      salmon
      l-d-flex l-align-items-center
      cursor-pointer
    "]`)
  },
  getQuizName () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="p-3 cursor-pointer card mb-3"]')
  },
  getLoadingQuiz () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-linear-progress mb-3"]')
  },
  getQuizTitle () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="mb-4 px-3"]')
  },
  getQuizDescription () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="lead-light--text markdown"]')
  },
  getAnswerTextQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Digite a sua mensagem"]')
  },
  getOptionMultipleChoiceQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="mt-2"]')
  },
  getOptionCheckBoxQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="el-checkbox-group mt-2 l-checkbox-group"]')
  },
  getOptionLinearScaleQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="scale"]')
  },
  getScaleChoiceQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[name="scale"]')
  },
  getUploadFileQuestion () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[type="file"]')
  },
  getAttachmentFileQuestionContent () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="field-upload-content mt-2"]')
  },
  getSendAnswerQuizButton () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button el-button--primary el-button--large is-fill"]')
  },
  getPopupAreYouSureMessage () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="prompt-dialog l-prompt-dialog"]').should('exist')
  },
  getConfirmButtons (option) {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-d-flex mt-4 prompt-buttons"]').contains(option)
  },
  getQuizCreated () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-table-tbody"]')
  },
  getViewAnswered () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-button el-button bold action-button f-14 ml-2 lead-light--text el-button--default is-plain"]')
  },
  getViewIndividual () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[id="tab-individual"]')
  },
  getPersonAnswered () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="targets l-d-flex fields-container column scroll-y"]')
  },
  getPersonAnsweredIsOnTheList () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="content scroll-y px-4"]')
  },
  getComunicadosSidebar () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="text-small color-lead-light menu-item pl-4"]').contains('Comunicados')
  },
  getSearchComunicado () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[placeholder="Digite algo para buscar"]')
  },
  getViewComunicado () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[class="l-table-cell align-left cursor-pointer"]')
  },
  getBodyComunicado () {
    return cy.get('.embedded-portal > iframe').its('0.contentDocument').should('exist').then(cy.wrap).find('[kind="informative"]')
  }
}
