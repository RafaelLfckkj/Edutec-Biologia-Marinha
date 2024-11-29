
async function verificarCamposCadastro() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("Cadasemail").value;
  const senha = document.getElementById("Cadaspassword").value;
  const confirmarSenha = document.getElementById("password-confirm").value;
  if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
    alert("Preencha todas as informações de cadastro");
    return;
  }



if (senha !== confirmarSenha) {
  alert("Senhas não conhecidem");
  return;
}

const user = {
  nome,
  email,
  senha
}
  

const response = await fetch("https://edutec-biologia-marinha-backend.vercel.app/register", {
  method: "POST",
  headers: {
  "Content-Type": "application/json"
  },
  body: JSON.stringify({user})
  }).then(response => response.json());

  alert(response.message);

  if (response.userExists) {
  window;location.reload();
  return
  }

  window.location.href = "../pages/login.html";
  
}

 const verificarCadastro = document.querySelector("#cadastro-button");
 verificarCadastro.addEventListener("click", (event) => {
    event.preventDefault();
    verificarCamposCadastro();
});
