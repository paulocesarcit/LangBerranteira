const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const compiler = require('./compiler')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

//Get
app.get ('/', (req, res) => {
    res.send('SO SERJÃO BERRANTERO')
})

//Post
app.post('/serJao', (req, res) => {
    //Armazena o req.body na variavel body
    const { body } = req
    if(body.length > 0){
        /*
        * Se o body não estiver vazio chama a função compiler
        * e retorna o status 201 e uma resposta vazia
        */
        compiler(body.text)
        res.status(201).send('')
    } else {
        /*
        * Se o body estiver vazio chama a função compiler
        * e retorna o status 400 e Erro
        */
        res.status(400).send("Error")
    }
})

//Inicia server
var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})