async function login() {
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#password").value;

  if (email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
  }

  const user = {
      email,
      senha
  };

  const response = await fetch("https://edutec-biologia-marinha-backend.vercel.app/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
  }).then(response => response.json());

  if (response.ok) {
      console.log(response.token)
      localStorage.setItem("token", response.token)
      window.location.href = "../../index.html"
      return
  }
  
  alert(response.message)
  window.location.reload()
}

const button = document.querySelector("#login-button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  login();
});