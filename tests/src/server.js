const express = require('express')
const server = express()
const router = require('./router')
const port = 3001
const path = require('path')

server.use(router)
server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, './views'))
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

server.listen(port, () => console.log(`Rodando em http://localhost:${port}`))
