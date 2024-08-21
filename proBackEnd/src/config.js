require('dotenv').config();

module.exports ={
    app:{
        port: process.env.PORT || 4000,
    },
    //creacion del objeto mysql
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DB || 'test2',
        port: process.env.MYSQL_DB_PORT || 3304
    }
}