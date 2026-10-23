
export function getStorage(){
    const dados =localStorage.getItem('users')
    if(dados === null){
        return []
    }else{
        const objeto = JSON.parse(dados)
        return objeto
    }
}

export function setStorage(users){
    localStorage.setItem('users', JSON.stringify(users))
}