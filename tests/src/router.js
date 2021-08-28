const express = require('express')
const router =  express.Router()

// router.get('/', (req, res) => {res.render("index")})
router.get('/', (req, res) => res.render("index", {page: 'criar-pedido'}))
router.get('/produtos', (req, res) => {res.render("produtos")})

module.exports = router