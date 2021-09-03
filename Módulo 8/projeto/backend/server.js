const express = require('express')
const app = express()

var bosyParser = require('body-parser')

global.__basedir = __dirname

const db = require('./config/db.config')

const Cliente = db.Cliente

let router = require('./routes/router')

const cors = require('cors')
const bodyParser = require('body-parser')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSucessStatus: 200
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(express.static('resources'))
app.use('/', router)

const server = app.listen(8080, function () {
    let host = server.address().address
    let port = server.address.port
    console.log("O app está sendo executado em http://%s:%s",host, port)
})

db.sequelize.sync({force: true}).then(() => {
    Cliente.sync().then(() => {
        const clientes = [
            { nome: 'Pedro', email: 'pedro@gmail.com', idade: 21 },
            { nome: 'Mariana', email: 'mariana@gmail.com', idade: 15 },
            { nome: 'Jéssica', email: 'jessica@gmail.com', idade: 25 },
            { nome: 'Gabriel', email: 'gabriel@gmail.com', idade: 18 },
        ]

        for(let i = 0; i < clientes.length; i++){
            Cliente.create(clientes[i])
        }
    })
})