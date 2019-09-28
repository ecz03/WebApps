/*----------------------------------------------------------
 * Práctica 5: Utilizando MySQL
 * Fecha: 27-Sep-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const net = require('net');
const express = require("express")
const mysql = require("mysql")
const app = express();
const c = require("./consult_sups.js")

//EJS
app.engine('html', require("ejs").renderFile);

const config = {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'shs'
};

app.get('/',(req,res)=>{
   const conexion = mysql.createConnection(config);
   c.consult_sups(conexion,res)
});

app.listen(8080, ()=> {
    console.log("Servidor en linea");
});

