const express = require('express')
const ClienteController = require('./controllers/ClienteController')


const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'pedido'}))

// route.get('/', (req, res) => res.render ("index", {page:'cliente'}))
route.post('/cliente', ClienteController.create)
route.get('/cliente', ClienteController.open)
route.post('/cliente/:action', ClienteController.delete)
        

module.exports = route