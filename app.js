const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

const users = [
    { 
        email: "abc@gmail.com",
        senha: "123",
        nome: "Maria",
    },
    {
        email: "def@gmail.com",
        senha: "000",
        nome: "João",
    },
    {
        email: "ghi@gmail.com",
        senha: "111",
        nome: "José",
    }
]

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/bemvindo', (req, res) => {
    res.send('bem vindo!')
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    console.log(senha)
    console.log(email)
    console.log(req.body)
    for (var i= 0; i< users.length; i= i+1) {
        const user = users[i]
        if (email === user.email) {
            if (senha === user.senha) {
                return res.json(user)
            }
        }
    
    }
        return res.json({
            error:"credenciais inválidas"
        })

})

app.listen(port, () => {
    console.log(`Exemplo de app rodando em http://localhost:${port}`)
})