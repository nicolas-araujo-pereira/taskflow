const nome = document.querySelector(".nome")
const senha = document.querySelector(".senha")
const cSenha = document.querySelector(".cSenha")
const criar = document.querySelector(".criar")
const arrayUsers = []

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
        console.log("senhas iguais")
    }else{
        console.log("senhas diferentes")
    }
}

criar.addEventListener("click", () => {
    const verificacao = verificaInputsVazios()
    if(verificacao){
        const senhaConfirmada = comparaSenha(senha.value, cSenha.value)
        if(senhaConfirmada){
            const get = getStorage()          
        }
    }
})