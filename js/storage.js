
export function getStorage(){
    const dados =localStorage.getItem('users')
    if(dados === null){
        return [{}]
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

export function setStorageTask(task){
    const user = getUserLoged()
    if(user === null){
        return
    }
    localStorage.setItem('tarefas_' + user.nome, JSON.stringify(task))
}

export function getStorageTask(){
    const user = getUserLoged()
    if(user === null){
        return []
    }
    const dados = localStorage.getItem('tarefas_' + user.nome)
    if(dados === null){
        return []
    }else{
        const objeto = JSON.parse(dados)
        return objeto
    }
}