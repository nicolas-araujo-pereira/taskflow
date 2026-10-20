const input = document.getElementById("inputAdicionar")
const listaTarefas = document.querySelector(".tarefas")
const botaoAdicionar = document.getElementById("botaoAdicionar")
const tarefas = []

const adicionarTarefa = () => {
    const id = crypto.randomUUID()
    const titulo = input.value
    const status = "pendente"

    tarefas.push({
        id: id,
        titulo: titulo,
        status: status
    })

}

const tarefaHTML = (tarefa) => {


    const elementoTarefa = document.createElement("div")
    elementoTarefa.className = "tarefa"
    elementoTarefa.id = tarefa.id

    const titulo = document.createElement("label")
    titulo.textContent = tarefa.titulo

    const check = document.createElement("input")
    check.type = "checkbox"

    const containerBotoes = document.createElement("div")
    containerBotoes.className = "botoes"

    const editar = document.createElement("button")
    editar.textContent = "✎"
    editar.className = "editar"

    const excluir = document.createElement("button")
    excluir.textContent = "✖"
    excluir.className = "excluir"

    containerBotoes.appendChild(editar)
    containerBotoes.appendChild(excluir)

    elementoTarefa.appendChild(check)
    elementoTarefa.appendChild(titulo)
    elementoTarefa.appendChild(containerBotoes)

    listaTarefas.appendChild(elementoTarefa)



}

const excluirTarefa = () => {
    const botoesExcluir = document.querySelectorAll(".excluir")
    botoesExcluir.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            botao.dataset.id = tarefas[indice].id
            const id = botao.dataset.id
            const tarefaEncontrada = tarefas.find(tarefa => {
                return tarefa.id === id
            })
            const index = tarefas.findIndex(tarefa => {
                return tarefa.id === tarefaEncontrada.id
            })
            console.log(index)
            tarefas.splice(index, 1)
            renderizarTarefa()
        })
    })
}

const editarTarefa = () => {
    const botaoEditar = document.querySelectorAll(".editar")
    botaoEditar.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            botao.dataset.id = tarefas[indice].id
            const id = botao.dataset.id
            const tarefaEncontrada = tarefas.find(tarefa => {
                return tarefa.id === id
            })
            const index = tarefas.findIndex(tarefa => {
                return tarefa.id === tarefaEncontrada.id
            })
            const novoTitulo = prompt()
            tarefas[index].titulo = novoTitulo
            renderizarTarefa()
        })
    })
}
    
const renderizarTarefa = () => {

    listaTarefas.innerHTML = ""

    tarefas.forEach((tarefa) => {
        tarefaHTML(tarefa)
    })

    excluirTarefa()
    editarTarefa()
}





botaoAdicionar.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        adicionarTarefa()
    }
    renderizarTarefa()

    input.value = ""

})