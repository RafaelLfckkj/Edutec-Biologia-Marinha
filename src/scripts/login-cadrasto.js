const login1 = document.querySelector(".escolheu");
const loginhi = document.getElementById("1");
const login = document.querySelector(".login-container");
const cadas = document.querySelector(".escolheu1");
const cadashi = document.getElementById("2");
const cadastra = document.querySelector(".register-container");
function trocar() {
  login1.classList.toggle("hide");
  loginhi.classList.toggle("active"); 
  login.classList.add("active1");
  cadas.classList.toggle("hide");
  cadashi.classList.toggle("active4");
  cadastra.classList.remove("active3")
}
const button = document.querySelector(".troque");
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("clicou");
  trocar(); 
});
function trocar2() {
  cadas.classList.toggle("hide");
  cadashi.classList.toggle("active4"); 
  cadastra.classList.add("active3");
  login1.classList.remove("hide");
  login1.classList.add("escolheu");
  loginhi.classList.remove("active");
  login.classList.remove("active1");
}
const button2 = document.querySelector(".troque2");
button2.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("clicou");
  trocar2(); 
});