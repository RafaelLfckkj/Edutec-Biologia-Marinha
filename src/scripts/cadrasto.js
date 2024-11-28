
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
  

const response = await fetch("http://localhost:3000/register", {
  method: "POST",
  headers: {
  "Content-Type": "application/json"
  },
  body: JSON.stringify({user})
  }).then(response => response.json());

  alert(response.message);

  if (response.userExist) {
  window;location.reload();
  return
  }

 
  
}

 const verificarCadastro = document.querySelector("#cadastro-button");
 verificarCadastro.addEventListener("click", (event) => {
    event.preventDefault();
    verificarCamposCadastro();
});
