const express = require('express')
const app = express()

let minutos = 0, segundos = 0
let contar

function pad(valor) {
    return valor < 10 ? '0' + valor : valor;
}

function atualizarSegundos() {
    if (segundos === 60) {
        segundos = 0
        atualizarMinutos()
    } else {
        segundos += 1
    }
}

function atualizarMinutos() {
    return minutos += 1
}

app.get('/', (req, res) => {
    const mensagem = `Tempo atual do cronômetro: ${pad(minutos)} minutos e ${pad(segundos)} segundos`
    res.send(mensagem)
})

app.get('/iniciar', (req, res) => {
    res.send(`Cronômetro iniciado!`)
    if (minutos === 0 && segundos === 0) {
        contar = setInterval(atualizarSegundos, 1000)    
    }
})

app.get('/pausar', (req, res) => {
    res.send(`Cronômetro pausado!`)
    clearInterval(contar)
})

app.get('/continuar', (req, res) => {
    res.send(`Cronômetro continuando!`)
    contar = setInterval(atualizarSegundos, 1000) 
})

app.get('/zerar', (req, res) => {
    res.send(`Cronômetro zerado!`)
    minutos = 0
    segundos = 0
})

app.listen(8000)