const input = document.getElementById("inputAdicionar")
const listaTarefas = document.querySelector(".tarefas")
const botaoAdicionar = document.getElementById("botaoAdicionar")
const tarefas = []

const adicionarTarefa = () => {
    const id = crypto.randomUUID()
    const titulo = input
    const status = "pendente"

    tarefas.push({
        id: id,
        titulo: titulo,
        status: status
    })
}

const renderizarTarefa = (tarefa) => {
    const elementoTarefa = document.createElement("div")
    elementoTarefa.className = "tarefa"
    elementoTarefa.id = tarefas[tarefa].id

    const titulo = document.createElement("label")
    titulo.textContent = tarefas[tarefa].titulo
    
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

botaoAdicionar.addEventListener("click", () => {
  renderizarTarefa(0)  
})