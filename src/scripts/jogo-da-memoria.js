const backImage = '.././jogo da memoria/back.png'; // Imagem da parte de trás das cartas
let cardImages = [
    '.././jogo da memoria/caran.png', '.././jogo da memoria/magicarp.png', '.././jogo da memoria/molu.png', 
    '.././jogo da memoria/caran.png', '.././jogo da memoria/magicarp.png', '.././jogo da memoria/molu.png'
]; // Imagens da fase 1
const gameBoard = document.getElementById('game-board');
let flippedCards = [];
let matchedCards = [];
let timeLeft = 10;
let timer;
let currentPhase = 1;

// Função para embaralhar as cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de lugar
    }
    return array;
}

function createBoard() {
    gameBoard.innerHTML = ''; // Limpa o tabuleiro
    cardImages = shuffle(cardImages); // Embaralha as cartas antes de criar o tabuleiro
    gameBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(cardImages.length)}, 100px)`;
// index
    cardImages.forEach((img, ) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.card = img; // Associa a imagem da frente com a carta
        cardElement.style.backgroundImage = `url('${backImage}')`; // Define a imagem de fundo padrão (parte de trás)
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });

    startTimer();
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.style.backgroundImage = `url('${this.dataset.card}')`; // Muda para a imagem da frente da carta
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.card === card2.dataset.card) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === cardImages.length) {
            clearInterval(timer);
            showPopup('Você venceu esta fase!', 'Próxima fase!');
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.style.backgroundImage = `url('${backImage}')`; // Retorna para a imagem de fundo (parte de trás)
            card2.style.backgroundImage = `url('${backImage}')`; // Retorna para a imagem de fundo (parte de trás)
            flippedCards = [];
        }, 1000);
    }
}

function startTimer() {
    timeLeft = currentPhase === 1 ? 10 : currentPhase === 2 ? 30 : 45;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft= timeLeft-1;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showPopup('Tempo esgotado! Você perdeu!', 'Tentar de novo');
        }
    }, 1000);
}

function showPopup(message, buttonText) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup-btn').textContent = buttonText;
    popup.classList.remove('hidden');
}

// Função para reiniciar a fase atual sem avançar
function restartPhase() {
    matchedCards = [];
    flippedCards = [];
    document.getElementById('popup').classList.add('hidden');
    createBoard(); // Recria o tabuleiro atual com as cartas embaralhadas
}

function nextPhase() {
    if (currentPhase === 3) {
        alert("Parabéns! Você completou todas as fases!");
        goHome();
        return;
    }

    currentPhase= currentPhase+1;
    matchedCards = [];
    flippedCards = [];
    document.getElementById('popup').classList.add('hidden');

    if (currentPhase === 2) {
        cardImages = [
            '.././jogo da memoria/caran.png', '.././jogo da memoria/magicarp.png', '.././jogo da memoria/molu.png', '.././jogo da memoria/polvo.png',
            '.././jogo da memoria/caran.png', '.././jogo da memoria/magicarp.png', '.././jogo da memoria/molu.png', '.././jogo da memoria/polvo.png'
        ]; // Imagens da fase 2
    } else if (currentPhase === 3) {
        cardImages = [
            '.././jogo da memoria/caran.png', '.././jogo da memoria/magicarp.png', '.././jogo da memoria/molu.png', '.././jogo da memoria/polvo.png',
            '.././jogo da memoria/shark.png', '.././jogo da memoria/tentacru.png', '.././jogo da memoria/caran.png', '.././jogo da memoria/magicarp.png',
            '.././jogo da memoria/molu.png', '.././jogo da memoria/polvo.png', '.././jogo da memoria/shark.png', '.././jogo da memoria/tentacru.png'
        ]; // Imagens da fase 3
    }

    createBoard();
}

function goHome() {
    window.location.href = '../../index.html'; // Redireciona para a página inicial
}
function volte(){
    window.location.href = './jogos.html';
}
// Atribuir ações aos botões de popup
document.getElementById('popup-btn').addEventListener('click', function() {
    if (this.textContent === 'Tentar de novo') {
        restartPhase(); // Reinicia a fase atual
    } else {
        nextPhase(); // Avança para a próxima fase
    }
});

// Inicializa o tabuleiro
createBoard();