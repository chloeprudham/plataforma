let mysql = require('mysql');

db = mysql.createConnection(
    {
        host     : '127.0.0.1',
        port     : 3306,
        user     : 'prueba',
        password : 'prueba',
        database : 'plataforma',
    });
