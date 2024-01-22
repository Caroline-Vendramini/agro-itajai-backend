const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/bemvindo', (req, res) => {
    res.send('bem vindo!')
})

app.post('/login', (req, res) => {
    res.send('!')
})

app.listen(port, () => {
    console.log(`Exemplo de app rodando em http://localhost:${port}`)
})