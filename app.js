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
    const { body } = req
    if(body.length > 0){
        compiler(body.text)
        res.status(201).send('')
    } else {
        res.status(400).send("Error");
    }
})

//Inicia server
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})