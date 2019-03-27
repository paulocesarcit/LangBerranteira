const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//Get
app.get ('/', (req, res) => {
    res.send('SO SERJÃO BERRANTERO')
})

//Post
app.post('/serJao', (req, res) => {
    const { body } = req
    console.log(req)
    res.status(201)
    res.send('POST request to the homepage')
})

//Inicia server
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})