const { render } = require('ejs')
const express = require('express')
const router =  express.Router()

// router.get('/', (req, res) => {res.render("index")})
router.get('/', (req, res) => res.render("index", {page: 'criar-pedido'}))
router.get('/produtos', (req, res) => {res.render("index")})
router.get('/pedidos', (req, res) => {res.render("pedidos")})

module.exports = router