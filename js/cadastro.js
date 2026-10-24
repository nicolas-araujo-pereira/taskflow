import { getStorage, setStorage} from "./storage.js"

const nome = document.querySelector(".nome")
const senha = document.querySelector(".senha")
const cSenha = document.querySelector(".cSenha")
const criar = document.querySelector(".criar")

const users = getStorage()

function verificaInputsVazios(){
    if(nome.value.trim() !== "" && senha.value.trim() !== "" && cSenha.value.trim() !== "" ){
        return true
    }else{
        alert("preencha todos os campos")
        return false
    }
}

function comparaSenha(senha1,senha2){
    if (senha1 === senha2){
        return true
    }else{        
        alert("As senhas devem ser iguais")
        return false
    }
}

criar.addEventListener("click", () => {
    const verificacao = verificaInputsVazios()
    if(verificacao){
        const senhaConfirmada = comparaSenha(senha.value, cSenha.value)
        if(senhaConfirmada){
             users.push({nome: nome.value, senha: senha.value})
             setStorage(users)
             alert("Usuário criado")
             nome.value = ""
             senha.value =""
             cSenha.value = ""          
        }
    }
})