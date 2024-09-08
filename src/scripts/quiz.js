// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const progressBar = document.querySelector('#progress-bar'); // Seleciona a barra de progresso
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;
let questionAnswered = false; // Controla se a questão já foi respondida

// perguntas
const questions = [
  {
    question: 'PHP foi desenvolvido para qual fim?',
    answers: [
      { answer: 'Back-End', correct: true },
      { answer: 'Front-End', correct: false },
      { answer: 'Sistema operacional', correct: false },
      { answer: 'Banco de dados', correct: false },
    ],
  },
  {
    question: 'Uma forma de declarar variável em JavaScript:',
    answers: [
      { answer: '$var', correct: false },
      { answer: 'var', correct: true },
      { answer: '@var', correct: false },
      { answer: '#let', correct: false },
    ],
  },
  {
    question: 'Qual o seletor de id no CSS?',
    answers: [
      { answer: '#', correct: true },
      { answer: '.', correct: false },
      { answer: '@', correct: false },
      { answer: '/', correct: false },
    ],
  },
  {
    question: 'O que é HTML?',
    answers: [
      { answer: 'Linguagem de programação', correct: false },
      { answer: 'Linguagem de marcação', correct: true },
      { answer: 'Banco de dados', correct: false },
      { answer: 'Framework', correct: false },
    ],
  },
  {
    question: 'Qual a tag para criar um parágrafo em HTML?',
    answers: [
      { answer: '<p>', correct: true },
      { answer: '<h1>', correct: false },
      { answer: '<div>', correct: false },
      { answer: '<a>', correct: false },
    ],
  }
];

// substituição do quizz para a primeira pergunta
function init() {
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  questionAnswered = false; // Reseta a variável de controle

  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Atualiza a barra de progresso
  updateProgressBar(i + 1, questions.length);

  questions[i].answers.forEach((answer, i) => {
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    answerBox.appendChild(answerTemplate);

    // Inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      if (!questionAnswered) {
        questionAnswered = true; // Marca que a questão foi respondida
        checkAnswer(this);
      }
    });
  });

  actualQuestion++;
}

// verifica a resposta do usuário
function checkAnswer(btn) {
  const buttons = answerBox.querySelectorAll('button');

  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  nextQuestion();
}

// exibe a próxima pergunta no quizz
function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// atualiza a barra de progresso
function updateProgressBar(current, total) {
  const progressPercentage = (current / total) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});
// voltar Home


// inicialização do quizz
init();
