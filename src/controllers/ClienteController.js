// Inserir nome do cliente na DB
// Verificar se nome já existe

const Database = require('../db/config')

module.exports = {
    
    // Cria Cliente
    async create(req, res) {
        // Captura o nome do cliente em Index.ejs
        const db = await Database()
        const clienteName = req.body.cliente
        // let isCliente = true
        
        
        await db.run(`
        INSERT INTO clientes (
            id,
            name
            ) VALUES (
                NULL,
                "${clienteName}"
                )
                
                `)
                
                res.redirect(`/cliente/`)
                
                // res.render('cliente-cadastrado', {page: 'pedido'})
               
                await db.close()
                
            },
            
            // Exibe Clientes
            async open(req, res) {
                const db = await Database();
                
                const clientes = await db.all(`
                SELECT * FROM clientes 
                `)
                
                res.render("cliente", {clientes: clientes})
            },

            // Deleta Cliente
            async delete(req, res){
              const db = await Database();
              const clienteId = req.params.clienteId;
              const action = req.params.action;
                console.log(action)
                
              if (action == "delete") {
                //   await db.run(`
                //       DELETE FROM clientes WHERE id = ${clienteId}
                //   `)
                  console.log('deletado')
              }
            
              res.redirect('/cliente/')
                
            }
            
        }