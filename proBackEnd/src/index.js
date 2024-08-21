const con = require('../src/db/mysql');
const app =require('./app');


//conMysql();
app.listen(app.get('port'),()=>{
    console.log("servidor escuchando en el puerto",app.get("port"));
}); 
