const mysql = require('mysql2');
const config = require('../config');

// creamos nuestro primer archivo de configuracion 
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port
};

//creamos variable conexion
let conexion;
//creamos una funcion de conexion
function conMysql() {
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        }
        else {
            console.log('Base de datos conectada!!!');
        }
    });
    conexion.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql();
        }
        else {
            throw err;
        }
    });
}

module.exports = conMysql;
//llamar a la conexion
conMysql();
//creacion de funcion para treaer todos los datos de la tabla
function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
//creacion de funcion para treaer solo un dato de la tabla
 function uno(tabla, ID) {

    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE ID=${ID}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

//creacion de funcion para eliminar
function insertar(tabla, data) {
    return new Promise((resolve, reject) => { //INSERTAR TOCA PONER EL NOMBRE DE TODAS LAS COLUMNAS
        conexion.query(`INSERT INTO ${tabla(/*AQUI*/Name, Age, Profession)} VALUES (?,?,?)`, [data.Name, data.Age, data.Profession], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE ID = ?`, [data, data.ID], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
function agregar(tabla, data) {
    if(data && data.ID==0){
        return insertar(tabla, data);
    }
    else{
        return actualizar(tabla, data)
    }
}

function eliminar(tabla, data) {
    return new Promise((resolve, reject) => {
            conexion.query(`DELETE FROM ${tabla} WHERE ID = ?`, [data.ID], (error, result) => {
                if (error) {
                    return reject(error);
                }
                // Verificamos si se eliminó algún registro
                if (result.affectedRows === 0) {
                    return reject(new Error('No se encontró el registro para eliminar.'));
                }
                resolve('Registro eliminado con éxito.');
            });  
            return error ? reject(error) : resolve(result);
    });
}
//creacion de funcion para actualizar y agregar

module.exports = {
    todos,
    agregar,
    uno,
    eliminar,
    actualizar
};