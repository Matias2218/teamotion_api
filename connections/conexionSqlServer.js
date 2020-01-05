const sql = require('mssql');

const webconfig = {
    user: 'sa',
    password: 'test',
    server: 'DESKTOP-22C6M25\\SQLEXPRESS',
    database: 'teamotionbd',

    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
};

sql.connect(webconfig).then(() =>{
}).catch((err) =>{
});


module.exports = sql;