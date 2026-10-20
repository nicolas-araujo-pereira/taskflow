import { tarefas, editarTarefa, excluirTarefa, concluirTarefas, adicionarTarefa } from './task.js'

const input = document.getElementById("inputAdicionar")
const listaTarefas = document.querySelector(".tarefas")
const botaoAdicionar = document.getElementById("botaoAdicionar")

const tarefaHTML = (tarefa) => {


    const elementoTarefa = document.createElement("div")
    elementoTarefa.className = "tarefa"
    elementoTarefa.id = tarefa.id

    const titulo = document.createElement("label")
    titulo.textContent = tarefa.titulo

    const check = document.createElement("input")
    check.className = "inputCheckbox"
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

const renderizarTarefa = () => {

    listaTarefas.innerHTML = ""

    tarefas.forEach((tarefa) => {
        tarefaHTML(tarefa)
    })

}

const mapearExcluirTarefa = () => {
    const botoesExcluir = document.querySelectorAll(".excluir")

    botoesExcluir.forEach((botao) => {
        botao.addEventListener("click", () => {

            const elementoTarefa = botao.closest(".tarefa")
            const id = elementoTarefa.id

            const tarefaEncontrada = tarefas.find((tarefa) => {
                return tarefa.id === id
            })

            const index = tarefas.findIndex((tarefa) => {
                return tarefa.id === tarefaEncontrada.id
            })

            excluirTarefa(index)
            atualizarTela()
        })
    })
}

const mapearEditarTarefa = () => {
    const botaoEditar = document.querySelectorAll(".editar")
    botaoEditar.forEach((botao) => {
        botao.addEventListener("click", () => {
            
            const elementoTarefa = botao.closest(".tarefa")
            const id = elementoTarefa.id
            
            const tarefaEncontrada = tarefas.find(tarefa => {
                return tarefa.id === id
            })
            
            const index = tarefas.findIndex(tarefa => {
                return tarefa.id === tarefaEncontrada.id
            })
            const novoTitulo = prompt() 
            
            editarTarefa(novoTitulo, index)
            atualizarTela()
        })
    })
}

const mapearConcluirTarefas = () => {
    const checkbox = document.querySelectorAll(".inputCheckbox")
    
    checkbox.forEach((input) => {
        input.addEventListener("change", () => {
            
            const elementoTarefa = input.closest(".tarefa")
            const id = elementoTarefa.id
            
            const tarefaEncontrada = tarefas.find(tarefa => {
                return tarefa.id === id
            })
            
            const index = tarefas.findIndex(tarefa => {
                return tarefa.id === tarefaEncontrada.id
            })
           
            concluirTarefas(input, index)
            atualizarTela()
        })
    })
}


const atualizarTela = () => {
    renderizarTarefa()
    mapearExcluirTarefa()
    mapearEditarTarefa()
    mapearConcluirTarefas()
}

botaoAdicionar.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        adicionarTarefa(input.value)
    }

    input.value = ""
    
    atualizarTela()
})