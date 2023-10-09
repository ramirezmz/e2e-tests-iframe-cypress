const LOGIN = {
  welcomeMessage: 'Bem-vindo(a)! Insira seu e-mail para continuar.'
}

const CREATE_QUIZ = {
  title_quiz: 'Testing e2e with cypress',
  description_quiz: 'Testando descrição da enquete de texto',
  title_text_question: 'Escolha qual é a sua fruta preferida?',
  title_choice_question: 'Escolha qual é a sua sobremesa preferida?',
  description_choice_question: 'estando descrição da pergunta de múltipla escolha',
  three_options_multiple_choise_question: ['Bolo de chocolate', 'Bolo de cenoura', 'Bolo de abacaxi'],
  title_unique_choice_question: 'Escolha qual é a sua fruta preferida?',
  description_unique_choice_question: 'Testando descrição da pergunta de seleção única',
  three_option_checkbox_question: ['Maçã', 'Banana', 'Abacaxi'],
  title_linear_scale_question: 'Escolha qual é a sua nota para o curso?',
  description_linear_scale_question: 'Testando descrição da pergunta de escala linear',
  min_scale_question: 'Muito Ruim',
  max_scale_question: 'Excelente',
  title_load_file: 'Escolha qual é a sua foto preferida?',
  description_load_file: 'Testando descrição da pergunta de carregamento de arquivo',
  category: 'Geral',
  who_can_see_question: ['Papai', 'Coordenador']
}

const ANSWER_QUIZ = {
  title_quiz: 'Testing e2e with cypress',
  answer_text_question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliqu',
  option_multiple_choice_question: 'Bolo de chocolate',
  option_checkbox_question: ['Maçã', 'Banana'],
  option_linear_scale: 5
}

const VIEW_AS_ADMIN_QUIZ = {
  username_answered: 'Roberto Ramirez'
}

export { LOGIN, CREATE_QUIZ, ANSWER_QUIZ, VIEW_AS_ADMIN_QUIZ }
