import {verifyToken} from "../../verify-token.js"

const url = "../pages/login.html"

verifyToken(url)


// declaração de variáveis
const question = document.querySelector('#question');
const questionu = document.querySelector('#question1');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const progressBar = document.querySelector('#progress-bar'); // Seleciona a barra de progresso
const questionNumber = questionu.querySelector('#question-number');
const onda1 = document.querySelector('.onc');
const onda2 = document.querySelector('.onq');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;
let questionAnswered = false; // Controla se a questão já foi respondida

// perguntas
const questions = [
  {
    question: 'Qual destes é um exemplo de um cnidário?',
    answers: [
      { answer: 'Polvo', correct: false },
      { answer: 'Estrela-do-mar', correct: false },
      { answer: 'Tartaruga-marinha', correct: false },
      { answer: 'Água-viva', correct: true },
    ],
  },
  {
    question: 'Qual é a principal característica dos crustáceos?',
    answers: [
      { answer: 'Têm asas membranosas', correct: false },
      { answer: 'Têm um corpo segmentado com dois pares de antenas', correct: true },
      { answer: 'Possuem uma concha protetora externa', correct: false },
      { answer: 'Têm espinhos ao longo do corpo', correct: false },
    ],
  },
  {
    question: 'Qual é a característica que diferencia os peixes ósseos dos cartilaginosos?',
    answers: [
      { answer: 'Esqueleto feito de osso', correct: true },
      { answer: 'Presença de nadadeiras', correct: false },
      { answer: 'Respiração por pulmões', correct: false },
      { answer: 'Presença de escamas', correct: false },
    ],
  },
  {
    question: 'Qual é a principal estrutura usada pelos moluscos para locomoção?',
    answers: [
      { answer: 'Nadadeiras', correct: false },
      { answer: 'Flagelos', correct: false },
      { answer: 'Pés musculares', correct: true },
      { answer: 'Tentáculos', correct: false },
    ],
  },
  {
    question: 'Qual é a principal característica dos cnidários?',
    answers: [
      { answer: 'Têm um esqueleto interno calcificado', correct: false },
      { answer: 'Respiram por brânquias', correct: false },
      { answer: 'Possuem espinhos venenosos', correct: false },
      { answer: 'Apresentam células urticantes chamadas cnidócitos', correct: true },
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
  const progressPercentage = (current / total) * 85;
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
  onda1.classList.toggle('hide');
  onda2.classList.toggle('hide');
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
