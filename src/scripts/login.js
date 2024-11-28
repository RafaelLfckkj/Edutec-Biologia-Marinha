function verificarCamposLogin() {
    const email = document.getElementById("loginemail").value;
    const senha = document.getElementById("loginpassword").value;
    if (email === "" || senha === "") {
      alert("Preencha todas as informações de login");
      return;
    }
  
    const button = document.querySelector("form button")
    button.addEventListener("click", (event) => {
      event.preventDefault()
      login()
    })
  }

  const verificarLogin = document.querySelector("#login-button");
verificarLogin.addEventListener("click", (event) => {
    event.preventDefault();
    verificarCamposLogin();
  });
