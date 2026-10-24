import {getStorageTask, setStorageTask} from './storage.js'
export const tarefas = getStorageTask()

export const adicionarTarefa = (input) => {
    const id = crypto.randomUUID()
    const titulo = input
    const status = "pendente"

    tarefas.push({
        id: id,
        titulo: titulo,
        status: status
    })

    setStorageTask(tarefas)

    
    

}

export const criarTarefasPendentes = () => {
    const tarefasPendentes = tarefas.filter(tarefa => tarefa.status === "pendente")
    return tarefasPendentes
}

export const criarTarefasConcluidas = () => {
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.status === "concluida")
    return tarefasConcluidas
}

export const excluirTarefa = (index) => {
    tarefas.splice(index, 1)
    setStorageTask(tarefas)
}

export const editarTarefa = (novoTitulo, index) => {
    tarefas[index].titulo = novoTitulo
    setStorageTask(tarefas)
}

export const concluirTarefas = (input,index) => {
    if (input.checked) {
        tarefas[index].status = "concluida"
    } else {
        tarefas[index].status = "pendente"
    }
    setStorageTask(tarefas)
}

