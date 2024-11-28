function verifyToken() {
    const token = localStorage.getItem("token")

    if(!token) {
        window.location.href = "./src/pages/cadastro.html"
        return
    }

}


verifyToken()