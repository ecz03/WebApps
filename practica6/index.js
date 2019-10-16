/*----------------------------------------------------------
 * Práctica 6: Utilizando MySQL y Express con plantillas EJS
 * Fecha: 16-Oct-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
 const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const c = require('./consulta.js');
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require("ejs").renderFile);

const config = {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'p6'
};

app.get('/agregar',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/add_language.html'));
});

app.get('/eureka',(req,res) =>{
   res.sendFile(path.join(__dirname+'/views/eureka.html'));
});

app.get('/lista',(req,res) =>{
   const conexion = mysql.createConnection(config);
   c.consulta(conexion,res);
});

app.get('/',(req,res) =>{
   res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/registrar', (req, res)=>{
    var lenguaje = req.body.lenguaje;
    var fecha = req.body.fecha;
    var autor = req.body.autor;
    const conexion = mysql.createConnection(config);
    if (lenguaje && fecha && autor){
        conexion.query('INSERT INTO lenguajes (nombre, anio, autor) VALUES (?, ?, ?)',[lenguaje,fecha,autor],(err, resultado, campos)=>{
            if (err){
                res.send('Error al escribir el lenguaje');
            } else {
                res.redirect('/eureka');
            }
            res.end();
        });
    } else {
        res.send('Favor de introducir todos los campos');
    }
    conexion.end();
});

app.listen(8080, ()=> {
    console.log('Servidor en linea');
});