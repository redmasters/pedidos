const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()
        
        await db.exec(`
            CREATE TABLE produtos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                price FLOAT,
                multiply INT
                )`
        );
        
        await db.exec(`
            CREATE TABLE clientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT
            )`
        );
        
        await db.exec(`
            CREATE TABLE pedidos (
                id INTEGER PRIMARY KEY
            )`
        );

        await db.close();
    }
}

initDb.init();