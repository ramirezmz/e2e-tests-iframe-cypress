import login from '../../support/actions/login.js'
import home from '../../support/actions/home.js'
import comunicados from '../../support/actions/comunicados.js'
import { ANSWER_QUIZ, CREATE_QUIZ } from '../../support/data/mock.js'

describe('Quizzes', () => {
  beforeEach(() => {
    login.visitPage()
  })
  it('The user should be able to create a quiz and then, fill it.', () => {
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

    comunicados.clickQuizSidebar('Enquetes')
    comunicados.clickCreateQuizOptionButton()
    comunicados.clickQuizOptionPopup()

    // Título da enquete
    comunicados.inputTitleQuiz(CREATE_QUIZ.title_quiz)

    // Descrição da enquete
    comunicados.inputDescriptionQuiz(CREATE_QUIZ.description_quiz)

    // Data de início
    comunicados.inputDateAtQuiz()

    // Enquete
    comunicados.clickToButtonToAddQuizzes()

    // Pergunta
    comunicados.addNewQuizButton()
    comunicados.selectTextQuestionOption()

    // Prencher Enquete de texto
    comunicados.inputTitleTextQuestion(CREATE_QUIZ.title_text_question)
    comunicados.inputDescriptionTextQuestion()

    // Enquete de Múltipla escolha
    comunicados.addNewQuizButton()
    comunicados.selectMultipleChoiceQuestion()

    // Preencher Enquete de Múltipla escolha
    comunicados.inputTitleChoiceQuestion(CREATE_QUIZ.title_choice_question)
    comunicados.inputDescriptionChoiceQuestion(
      CREATE_QUIZ.description_choice_question
    )

    comunicados.setThreeOptionsMultipleChoiseQuestion(
      CREATE_QUIZ.three_options_multiple_choise_question
    )

    // Enquete de Caixas de Seleção
    comunicados.addNewQuizButton()
    comunicados.selectCheckBoxQuestion()

    // Preencher Enquete de Seleção Única
    comunicados.inputTitleChoiceQuestion(
      CREATE_QUIZ.title_unique_choice_question
    )
    comunicados.inputDescriptionChoiceQuestion(
      CREATE_QUIZ.description_unique_choice_question
    )

    //  Prencher Enquete de Seleção Única
    comunicados.setThreeOptionsCheckBoxQuestion(
      CREATE_QUIZ.three_option_checkbox_question
    )

    // Enquete de escala linear
    comunicados.addNewQuizButton()
    comunicados.selectLinearScaleQuestion()

    // Preencher Enquete de escala linear
    comunicados.inputTitleChoiceQuestion(
      CREATE_QUIZ.title_linear_scale_question
    )
    comunicados.inputDescriptionChoiceQuestion(
      CREATE_QUIZ.description_linear_scale_question
    )
    comunicados.inputMinMaxScaleQuestion(
      CREATE_QUIZ.min_scale_question,
      CREATE_QUIZ.max_scale_question
    )
    comunicados.unableObrigatoryQuestion()

    // Enquete de carregamento de arquivo
    comunicados.addNewQuizButton()
    comunicados.selectFileUploadQuestion()

    // Preencher Enquete de carregamento de arquivo
    comunicados.inputTitleChoiceQuestion(CREATE_QUIZ.title_load_file)
    comunicados.inputDescriptionChoiceQuestion(
      CREATE_QUIZ.description_load_file
    )
    comunicados.unableObrigatoryQuestion()

    // Save perguntas
    comunicados.saveQuestion()

    // Para quem enviar

    comunicados.selectSendQuizToAll()
    comunicados.shouldLookingForQuizList()
    comunicados.clickCheckboxAllUser()
    comunicados.clickSavedSendQuiz()

    // Quem pode ver esta publicação?

    comunicados.selectQhoCanSeeQuiz(CREATE_QUIZ.who_can_see_question)

    // Qual a categoria?
    comunicados.clickCategorySpace(CREATE_QUIZ.category)

    // Enviar enquete
    comunicados.clickSendQuizButton()
    // Garantir o envio de enquete
    comunicados.ensurePopupMessageQuiz()

    comunicados.clickConfirmSendQuizButton()

    // popup de sucesso
    comunicados.ensurePopupMessageQuizSuccess()

    // navegar para meu feed
    comunicados.goToMyFeed()

    // verificar que há pendencias para responder
    comunicados.ensurePendingQuiz()

    // acessar a enquete
    comunicados.clickPendingQuiz(ANSWER_QUIZ.title_quiz)

    // verificar que é a enquete correta
    comunicados.ensureTitleQuiz(ANSWER_QUIZ.title_quiz)
    comunicados.ensureDescriptionQuiz(CREATE_QUIZ.description_quiz)

    // responder pergunta de texto
    comunicados.inputAnswerTextQuestion(ANSWER_QUIZ.answer_text_question)

    // responder pergunta de múltipla escolha
    comunicados.clickOptionMultipleChoiceQuestion(
      ANSWER_QUIZ.option_multiple_choice_question
    )

    // responder pergunta de caixa de seleção
    comunicados.clickOptionCheckBoxQuestion(ANSWER_QUIZ.option_checkbox_question)

    // responder pergunta de escala linear
    comunicados.clickOptionLinearScaleQuestion(ANSWER_QUIZ.option_linear_scale)

    // responder pergunta de carregamento de arquivo
    comunicados.uploadFileQuestion()

    // enviar resposta
    comunicados.clickSendAnswerQuizButton()
  })
})
