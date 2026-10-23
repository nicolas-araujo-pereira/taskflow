import { getStorage, setUserLoged } from "./storage.js"
const users = getStorage()
console.log(users)

const nome = document.querySelector(".nome")
const senha = document.querySelector(".senha")
const login = document.querySelector(".login")

login.addEventListener("click", () => {
    const encontrado = users.find((user) => user.nome === nome.value && user.senha === senha.value)
    if(encontrado != undefined){
        setUserLoged(encontrado)
        window.location.href = "../index.html"
    }else{
        alert("usuário não encontrado ")
    }
})