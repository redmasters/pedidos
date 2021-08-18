// Inserir nome do cliente na DB
// Verificar se nome já existe

const Database = require('../db/config')

module.exports = {
  
    async create(req, res) {
        // Captura o nome do cliente em Index.ejs
        const db = await Database()
        const clienteName = req.body.cliente
        let isCliente = true
        
        const verificarNome = await db.all(`
            SELECT name FROM clientes WHERE name = "${clienteName}"
        `)
        
        isCliente = verificarNome.some(verificarNome => verificarNome === clienteName)
        console.log('isCliente', isCliente)
        console.log('VerifyNome', verificarNome)
        
        
        if (! isCliente ) {
            await db.run(`
            INSERT INTO clientes (
                id,
                name
            ) VALUES (
                NULL,
                "${clienteName}"
            )
        `)
        } else {
            alert('Já cadastrado')
        }
        
        res.redirect(`/cliente/`)
        
        await db.close()

    },

    async open(req, res) {
        const db = await Database();
        
        const clientes = await db.all(`
            SELECT * FROM clientes 
            `)
        
        res.render("cliente", {clientes: clientes})
    }
  
}