// Inserir nome do cliente na DB

const Database = require('../db/config')

module.exports = {
  
    async create(req, res) {
        // Captura o nome do cliente em Index.ejs
        const cliente = req.body.cliente
        let clienteId
        let isCliente = true

        while (isCliente) {
            // Gera o nr do Cliente
            for(var i = 0; i < 6; i++) {
                i == 0 ? clienteId = i
            }
        }
    }
  
}