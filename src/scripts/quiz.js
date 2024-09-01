const questions = [
  {
    question: "Qual é a capital da França?",
    options: ["Londres", "Berlim", "Paris", "Madrid"],
    answer: 2 // Índice da resposta correta
  },
  {
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Pacífico", "Índico", "Ártico"],
    answer: 1 // Índice da resposta correta
  },
  {
    question: "Qual é o planeta mais próximo do sol?",
    options: ["Marte", "Vênus", "Terra", "Mercúrio"],
    answer: 3 // Índice da resposta correta
  },
  {
    question: "Qual é o idioma mais falado no mundo?",
    options: ["Inglês", "Mandarim", "Espanhol", "Hindi"],
    answer: 0 // Índice da resposta correta
  },
  {
    question: "Qual é o maior continente em área?",
    options: ["África", "América do Norte", "Ásia", "Europa"],
    answer: 2 // Índice da resposta correta
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    option.textContent = q.options[index];
    option.className = 'option'; // Reseta a classe para evitar estilos de respostas corretas ou erradas
  });
  document.getElementById('question-count').textContent = (currentQuestion + 1) + '/5 Questão';
}

function checkAnswer(option) {
  const selectedAnswer = option.textContent;
  const correctAnswer = questions[currentQuestion].options[questions[currentQuestion].answer];
  if (selectedAnswer === correctAnswer) {
    option.classList.add('correct');
    score++;
  } else {
    option.classList.add('wrong');
  }
  currentQuestion++;
  updateProgressBar();
  setTimeout(nextQuestion, 1000);
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progress = (currentQuestion / questions.length) * 100;
  progressBar.style.width = progress + '%';
}

function nextQuestion() {
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `<h2>Quiz Finalizado!</h2><p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
}

displayQuestion();
