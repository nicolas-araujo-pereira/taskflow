
export const tarefas = []

export const adicionarTarefa = (input) => {
    const id = crypto.randomUUID()
    const titulo = input
    const status = "pendente"

    tarefas.push({
        id: id,
        titulo: titulo,
        status: status
    })

}


export const excluirTarefa = (index) => {
    tarefas.splice(index, 1)
}

export const editarTarefa = (novoTitulo, index) => {
    tarefas[index].titulo = novoTitulo
}

export const concluirTarefas = (input,index) => {
    if (input.checked) {
        tarefas[index].status = "concluida"
    } else {
        tarefas[index].status = "pendente"
    }
}


