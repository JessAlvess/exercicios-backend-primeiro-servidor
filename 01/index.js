const express = require('express')
const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0
let ultimoIndice

app.get('/', (req, res) => {
    if (indice > jogadores.length - 1) {
        indice = 0
        ultimoIndice = 0
        res.send(`É a vez de ${jogadores[indice]} jogar!`)
    } else {
        if (ultimoIndice === 0 && indice === 0 ) {
            indice += 1
            res.send(`É a vez de ${jogadores[indice]} jogar!`)
            ultimoIndice = indice
            indice += 1
        } else {
            res.send(`É a vez de ${jogadores[indice]} jogar!`)
            indice += 1
            ultimoIndice = indice
        }
    }
})

app.listen(3000)