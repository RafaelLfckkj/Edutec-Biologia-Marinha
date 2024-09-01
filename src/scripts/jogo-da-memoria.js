const tabuleiro = document.querySelector("#tabuleiro")
let inicial = document.querySelector("#inicial")
let final = document.querySelector("#final")
let vitoria = document.querySelector("#vitoria")
var acertos = 0
let numero = 0
setTimeout (function(){
    inicial.showModal()
    ;
}, 500)


document.querySelector("#fechar_modal_inicial").onclick = function() {
    inicial.close()
    jogo_um()
}


const jogo_um = () => {
    function checkfim () {
        if (acertos === 2 && contagem >= 1){
            fim = true
            clearInterval(this.loop)
            jogo_dois()
            return parar_acabou()
        }  
    }
    this.acabou = setInterval(() => {
        checkfim()
    },1000)
    const parar_acabou = () => {
        clearInterval(this.acabou)
    }
    const imagees = [
        'jupiter.png',
        'lua.png',
        'marte.png',
        'netuno.png',
        'saturno.png',
        'sol.png',
        'terra.png',
        'venus.png',
    ]
    const imagens = [
    ]
    let cartaHTML = ''
    function aleatoriaa(){
        let numero1 = Math.floor(Math.random()*8)
        planeta = imagees[numero1]
        imagens.push(planeta)

        let numero2 = Math.floor(Math.random()*8)
        planeta2 = imagees[numero2]  
        while (planeta === planeta2){
            const numero2 = Math.floor(Math.random()*8)
            planeta2 = imagees[numero2]
        }   
        imagens.push(planeta2)
    }
    aleatoriaa()
    imagens.forEach(img =>{
        cartaHTML += `
            <div class="jogo" data-carta="${img}">
                <img src="./images/${img}" class="face frente">
                <img src="./images/verso.png" class="face verso">
            </div>

            <style>
                .verso{
                width: 110%;
                }
                #tabuleiro{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    width: 50vh;
                    max-width: 1300px
                    margin: 0 auto;
                    gap: 2rem;  

                }
                #container{
                    opacity:1;
                    background: rgba(0, 0, 0, .5);
                    width: 15rem;
                    height: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    margin-top: 4rem;
                    margin-bottom: 5rem;
                }
            </style>
        `
    })

    tabuleiro.innerHTML = cartaHTML + cartaHTML

    const cartas = document.querySelectorAll(".jogo")
    cartas.forEach(carta => carta.addEventListener('click', virar))
    let bloqueio = false


    let primeira_carta, segunda_carta
    function virar(){
        if(bloqueio===true){
            return false
        }
        this.classList.add("vira")

        if(!primeira_carta){
            primeira_carta = this
            primeira_carta.removeEventListener('click', virar)
            return false
        }
        segunda_carta = this

        check()
    }


    function check(){
        let igual = primeira_carta.dataset.carta === segunda_carta.dataset.carta?true:false

        if(!igual){
            remover()
        }
        else{
            reset(igual) 
        }
    }

    function remover(){
        bloqueio = true
        setTimeout(()=>{

            primeira_carta.classList.remove("vira")
            primeira_carta.addEventListener('click', virar)
            segunda_carta.classList.remove("vira")
            bloqueio = false
            primeira_carta = 0
            segunda_carta = 0
        },800)
    }


    var acertos = 0
    let fim = false

    const contagem = Number(tempo.innerHTML)
    function reset(igual){
        if(igual){
            primeira_carta.removeEventListener('click', virar)
            segunda_carta.removeEventListener('click', virar)
            bloqueio = false
            primeira_carta = 0
            segunda_carta = 0
            acertos = acertos + 1
            return acertos
        }
    }


    if (contagem <= 0){
        final.showModal()
    }
    (function aleatorio(){
        cartas.forEach(carta =>{
            let numero = Math.floor(Math.random()*12)
            carta.style.order = numero
        })
    })()
    cartas.forEach(carta => carta.addEventListener('click', virar))

    inicioTempo()
    return imagees

}


const jogo_dois = () => {
    acertos = 0
    function checkfim () {
        if (acertos === 4){
            fim = true
            clearInterval(this.loop)
            console.log(acertos)
            jogo_tres()
            return parar_acabou()
        }  
    }
    this.acabou2 = setInterval(() => {
        checkfim()
    },1000)
    const parar_acabou = () => {
        clearInterval(this.acabou2)
    }
    const imagees = [
        'jupiter.png',
        'lua.png',
        'marte.png',
        'netuno.png',
        'saturno.png',
        'sol.png',
        'terra.png',
        'venus.png',
    ]
    const imagens = [
    ]
    let cartaHTML = ''
    function aleatoriaa(){
        let numero1 = Math.floor(Math.random()*8)
        planeta = imagees[numero1]
        imagens.push(planeta)

        let numero2 = Math.floor(Math.random()*8)
        planeta2 = imagees[numero2]  
        while (planeta === planeta2){
            const numero2 = Math.floor(Math.random()*8)
            planeta2 = imagees[numero2]
            console.log(numero2)
        }   
        imagens.push(planeta2)

        let numero3 = Math.floor(Math.random()*8)
        planeta3 = imagees[numero3] 
        while (planeta3 === planeta2 | planeta3 === planeta){
            const numero3 = Math.floor(Math.random()*8)
            planeta3 = imagees[numero3]
        }   
        imagens.push(planeta3)

        let numero4 = Math.floor(Math.random()*8)
        planeta4 = imagees[numero4] 
        while (planeta4 === planeta3 | planeta4 === planeta2 | planeta4 === planeta){
            const numero4 = Math.floor(Math.random()*8)
            planeta4 = imagees[numero4]
        }   
        imagens.push(planeta4)

    }
    aleatoriaa()
    imagens.forEach(img =>{
        cartaHTML += `
            <div class="jogo" data-carta="${img}">
                <img src="./images/${img}" class="face frente">
                <img src="./images/verso.png" class="face verso">
            </div>

            <style>
                .jogo{
                    aspect-ratio: 3/3;
                    width: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                    transition: 0.5s ease;
                }
                #tabuleiro{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    width: 80vh;
                    max-width: 1500px
                    margin: 0 auto;
                    gap: 2rem;  
                }
                #container{
                    opacity:1;
                    background: rgba(0, 0, 0, .5);
                    width: 15rem;
                    height: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    margin-top: 4rem;
                    margin-bottom: 5rem;
                }
            </style>
        `
    })

    tabuleiro.innerHTML = cartaHTML + cartaHTML

    const cartas = document.querySelectorAll(".jogo")
    let bloqueio = false


    let primeira_carta, segunda_carta
    function virar(){
        if(bloqueio===true){
            return false
        }
        this.classList.add("vira")

        if(!primeira_carta){
            primeira_carta = this
            primeira_carta.removeEventListener('click', virar)
            return false
        }
        segunda_carta = this

        check()
    }

    function check(){
        let igual = primeira_carta.dataset.carta === segunda_carta.dataset.carta?true:false

        if(!igual){
            remover()
        }
        else{
            reset(igual) 
        }
    }

    function remover(){
        bloqueio = true
        setTimeout(()=>{
            primeira_carta.classList.remove("vira")
            primeira_carta.addEventListener('click', virar)
            segunda_carta.classList.remove("vira")
            bloqueio = false
            primeira_carta = 0
            segunda_carta = 0
        },800)
    }

    let fim = false

    function reset(igual){
        if(igual){
            primeira_carta.removeEventListener('click', virar)
            segunda_carta.removeEventListener('click', virar)
            bloqueio = false
            primeira_carta = 0
            segunda_carta = 0
            acertos = acertos + 1 
            console.log(acertos)               
            return acertos
        }
    }

    (function aleatorio(){
    cartas.forEach(carta =>{
        let numero = Math.floor(Math.random()*12)
            carta.style.order = numero
        })
    })()
    cartas.forEach(carta => carta.addEventListener('click', virar))

    inicioTempo_jogo_dois()
    checkfim()
    return acabou
}

const jogo_tres = () => {
    acertos = 0
    function checkfim () {
        if (acertos === 8){
            console.log(acertos)
            fim = true
            clearInterval(this.loop)
            clearInterval(this.acabou)
            vitoria.showModal()
        }  
    }
    this.acabou = setInterval(() => {
        checkfim()
    },1000)
    const imagees = [
        'jupiter.png',
        'lua.png',
        'marte.png',
        'netuno.png',
        'saturno.png',
        'sol.png',
        'terra.png',
        'venus.png',
    ]
    const imagens = [
    ]
    let cartaHTML = ''
    function aleatoriaa(){
        let numero1 = Math.floor(Math.random()*8)
        planeta = imagees[numero1]
        imagens.push(planeta)

        let numero2 = Math.floor(Math.random()*8)
        planeta2 = imagees[numero2]  
        while (planeta === planeta2){
            const numero2 = Math.floor(Math.random()*8)
            planeta2 = imagees[numero2]
            console.log(numero2)
        }   
        imagens.push(planeta2)

        let numero3 = Math.floor(Math.random()*8)
        planeta3 = imagees[numero3]
        while (planeta3 === planeta2 | planeta3 === planeta){
            const numero3 = Math.floor(Math.random()*8)
            planeta3 = imagees[numero3]

        }   
        imagens.push(planeta3)

        let numero4 = Math.floor(Math.random()*8)
        planeta4 = imagees[numero4] 
        while (planeta4 === planeta3 | planeta4 === planeta2 | planeta4 === planeta){
            const numero4 = Math.floor(Math.random()*8)
            planeta4 = imagees[numero4]
        }   
        imagens.push(planeta4)

        let numero5 = Math.floor(Math.random()*8)
        planeta5 = imagees[numero5]
        while (planeta5 === planeta4 | planeta5 === planeta3 | planeta5 === planeta2 | planeta5 === planeta){
            const numero5 = Math.floor(Math.random()*8)
            planeta5 = imagees[numero5]
        }   
        imagens.push(planeta5)

        let numero6 = Math.floor(Math.random()*8)
        planeta6 = imagees[numero6]
        while (planeta6 === planeta5 | planeta6 === planeta4 | planeta6 === planeta3 | planeta6 === planeta2 | planeta6 === planeta){
            const numero6 = Math.floor(Math.random()*8)
            planeta6 = imagees[numero6]
        }   
        imagens.push(planeta6)

        let numero7 = Math.floor(Math.random()*8)
        planeta7 = imagees[numero7]
        while (planeta7 === planeta6 | planeta7 === planeta5 | planeta7 === planeta4 | planeta7 === planeta3 | planeta7 === planeta2 | planeta7 === planeta){
            const numero7 = Math.floor(Math.random()*8)
            planeta7 = imagees[numero7]
        }   
        imagens.push(planeta7)

        let numero8 = Math.floor(Math.random()*8)
        planeta8 = imagees[numero8]
        while (planeta8 === planeta7 | planeta8 === planeta6 | planeta8 === planeta5 | planeta8 === planeta4 | planeta8 === planeta3 | planeta8 === planeta2 | planeta8 === planeta){
            const numero8 = Math.floor(Math.random()*8)
            planeta8 = imagees[numero8]
        }   
        imagens.push(planeta8)
    }
    aleatoriaa()
    imagens.forEach(img =>{
        cartaHTML += `
            <div class="jogo" data-carta="${img}">
                <img src="./images/${img}" class="face frente">
                <img src="./images/verso.png" class="face verso">
            </div>

            <style>
                .jogo{
                    aspect-ratio: 3/3;
                    width: 80%;
                    position: relative;
                    transform-style: preserve-3d;
                    transition: 0.5s ease;
                }
                #tabuleiro{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    width: 90vh;
                    max-width: 2000px
                    margin: 0 auto;
                    gap: 1rem;  
                }


                #container{
                    opacity:1;
                    background: rgba(0, 0, 0, .5);
                    width: 15rem;
                    height: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    margin-top: 2rem;
                    margin-bottom: 2rem
                }
            </style>
        `
    })

    tabuleiro.innerHTML = cartaHTML + cartaHTML

    const cartas = document.querySelectorAll(".jogo")
    let bloqueio = false


    let primeira_carta, segunda_carta
    function virar(){
        if(bloqueio===true){
            return false
        }
        this.classList.add("vira")

        if(!primeira_carta){
            primeira_carta = this
            primeira_carta.removeEventListener('click', virar)
            return false
        }
        segunda_carta = this

        check()
    }


    function check(){
        let igual = primeira_carta.dataset.carta === segunda_carta.dataset.carta?true:false

        if(!igual){
            remover()
        }
        else{
            reset(igual) 
        }
    }

    function remover(){
        bloqueio = true
        setTimeout(()=>{
            primeira_carta.classList.remove("vira")
            primeira_carta.addEventListener('click', virar)
            segunda_carta.classList.remove("vira")
            bloqueio = false
            primeira_carta = 0
            segunda_carta = 0
        },800)
    }

    let fim = false

    function reset(igual){
        if(igual){
            primeira_carta.removeEventListener('click', virar)
            segunda_carta.removeEventListener('click', virar)
            bloqueio = false
            primeira_carta = 0
            segunda_carta = 0
            acertos = acertos + 1                
            return acertos
        }
    }

    (function aleatorio(){
    cartas.forEach(carta =>{
        let numero = Math.floor(Math.random()*12)
            carta.style.order = numero
        })
    })()
    cartas.forEach(carta => carta.addEventListener('click', virar))

    inicioTempo_jogo_tres()
    checkfim()
    return acabou
}


// contadores
const tempo = document.querySelector("#tempo")
const inicioTempo = () =>{
    this.loop = setInterval(()=>{
        const tempoAtual = Number(tempo.innerHTML)
        tempo.innerHTML = tempoAtual - 1
        if (tempoAtual <=1){
            fim = true
            console.log(fim)
            clearInterval(this.loop)
            final.showModal()
            document.querySelector("#fechar_modal_derrota").onclick = function() {
                final.close()
                document.querySelector('#tempo').innerHTML = `10`
                jogo_um()
            }
            return fim
        }
    }, 1000)
}


const inicioTempo_jogo_dois = () =>{
    document.querySelector('#tempo').innerHTML = `15`
    this.loop = setInterval(()=>{
        const tempoAtual = Number(tempo.innerHTML)
        tempo.innerHTML = tempoAtual - 1
        if (tempoAtual <=1){
            fim = true
            console.log(fim)
            clearInterval(this.loop)
            console.log(acertos)
            final.showModal()
            document.querySelector("#fechar_modal_derrota").onclick = function() {
                final.close()
                document.querySelector('#tempo').innerHTML = `15`
                jogo_um()
            }
            return fim
        }
    }, 1000)
    return loop
}

const inicioTempo_jogo_tres = () =>{
    document.querySelector('#tempo').innerHTML = `30`
    this.loop = setInterval(()=>{
        const tempoAtual = Number(tempo.innerHTML)
        tempo.innerHTML = tempoAtual - 1
        if (tempoAtual <=1){
            fim = true
            console.log(fim)
            clearInterval(this.loop)
            console.log(acertos)
            final.showModal()
            document.querySelector("#voltar_inicio")
            document.querySelector("#fechar_modal_derrota").onclick = function() {
                final.close()
                document.querySelector('#tempo').innerHTML = `10`
                jogo_um()
            }
            return fim
        }
    }, 1000)
    return loop
}


let napoleao = Math.floor(Math.random() * 4);
const pepe = napoleao
const images = [
    'Anny.png',
    'hector.png',
    'Marcelo.png',
    'Raquel.png'
];
let personagem = images[napoleao];

let ovo = document.querySelector('#imagem');
ovo.innerHTML = `<img src="./images/${personagem}" alt="">`


const estrela = document.querySelector('#texto')
if (napoleao = 0){
    estrela.classList.add('anny')
}
if (napoleao = 1){
    estrela.classList.add('hector')
}
if (napoleao = 2){
    estrela.classList.add('marcelo')
}
if (napoleao = 3){
    estrela.classList.add('raquel')
}