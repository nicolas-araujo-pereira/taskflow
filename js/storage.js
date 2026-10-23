
export function getStorage(){
    const dados =localStorage.getItem('users')
    if(dados === null){
        return [{nome: "Admin" , senha: "Admin1234"}]
    }else{
        const objeto = JSON.parse(dados)
        return objeto
    }
}

export function setStorage(users){
    localStorage.setItem('users', JSON.stringify(users))
}

export function getUserLoged(){
    const dados = localStorage.getItem('user')
    const objeto = JSON.parse(dados)
    return objeto
}

export function setUserLoged(user){
    localStorage.setItem('user', JSON.stringify(user))
}