import { tarefas, criarTarefasPendentes, criarTarefasConcluidas, editarTarefa, excluirTarefa, concluirTarefas, adicionarTarefa } from './task.js'
import {deslogar} from './auth.js'

const input = document.getElementById("inputAdicionar")
const listaTarefas = document.querySelector(".tarefas")
const botaoAdicionar = document.getElementById("botaoAdicionar")

//CONTADORES

const todas = document.getElementById("rTodas")
const pendentes = document.getElementById("rPendentes")
const concluidas = document.getElementById("rConcluidas")

//Filtros

const botaoTodas = document.getElementById("bTodas")
const botaoPendentes = document.getElementById("bPendentes")
const botaoConcluidas = document.getElementById("bConcluidas")

let filtro = "Todas"

botaoTodas.addEventListener("click", () => {
    filtro = "Todas"
    atualizarTela()
})

botaoPendentes.addEventListener("click", () => {
    filtro = "Pendentes"
    atualizarTela()
})

botaoConcluidas.addEventListener("click", () => {
    filtro = "Concluidas"
    atualizarTela()
})

const tarefaHTML = (tarefa) => {  // Função que cria a estrutura HTML das tarefas


    const elementoTarefa = document.createElement("div")
    elementoTarefa.className = "tarefa"
    elementoTarefa.id = tarefa.id

    const titulo = document.createElement("label")
    titulo.textContent = tarefa.titulo

    const check = document.createElement("input")
    check.className = "inputCheckbox"
    if(tarefa.status === "concluida"){
        check.checked = true
    }
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

const renderizarTarefa = () => { // Função que coloca as tarefas geradas na tela

    listaTarefas.innerHTML = ""
    if(filtro === "Todas"){
        tarefas.forEach((tarefa) => {
            tarefaHTML(tarefa)
        })
    }

    if(filtro === "Pendentes"){
        const tarefasPendentes = criarTarefasPendentes()
        tarefasPendentes.forEach((tarefa) => {
            tarefaHTML(tarefa)
        })
    }

    if(filtro === "Concluidas"){
        const tarefasConcluidas = criarTarefasConcluidas() 
        tarefasConcluidas.forEach((tarefa) => {
            tarefaHTML(tarefa)
        })
    }
    

}

const contadores = () => {
    todas.textContent = tarefas.length
    pendentes.textContent = tarefas.filter(element => element.status === "pendente").length
    concluidas.textContent = tarefas.filter(element => element.status === "concluida").length
}

const atualizarTela = () => {   // Função responsável por atualizar os elementos na tela em cada ação do usuário
    renderizarTarefa()  // Função que coloca as tarefas geradas na tela
    mapearExcluirTarefa()   // Mapea o clique dos botões excluir criados 
    mapearEditarTarefa()    // Mapea o clique dos botões editar criados 
    mapearConcluirTarefas() // Mapea a mudança nos inputs tipo checkbox criados
    contadores()
    
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


botaoAdicionar.addEventListener("click", () => { // adiciona um titulo para a tarefa quando clicar no botão
    if (input.value.trim() !== "") {
        adicionarTarefa(input.value)
    }

    input.value = ""
    
    atualizarTela()
})

//FILTROS


const sair = document.querySelector(".sair")
sair.addEventListener("click", deslogar)

atualizarTela()  // Renderiza as tarefas salvas do usuário ao carregar a tela
