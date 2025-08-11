export async function getName() {
    const token = localStorage.getItem("token")
    if (!token) {
        return
    }
    const response = await fetch("https://edutec-biologia-marinha-backend.vercel.app/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    const nameP = document.querySelector(".user-name")
    nameP.innerText = `Usuário: ${response.name}`

}