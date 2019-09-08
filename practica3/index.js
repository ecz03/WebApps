/*----------------------------------------------------------
 * Práctica 3: Utilizando XML
 * Fecha: 07-Sep-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
<<<<<<< HEAD
 
const express = require("express")
const path = require("path")
const app = express()
const view_dir = './view/'
var peliculas = require('./peliculas.js')
var actores = require('./actores.js')

app.get('/',(req,res)=>{
    res.send('Bienvenido al Mundo del Cine')
})
=======
const express = require("express");
const app = express();
var peliculas = require('./peliculas.js');
var actores = require('./actores.js');

app.get('/',(req,res)=>{
    res.send('Hola al Mundo del Cine');
});
>>>>>>> 052d514cc3b05b709a5df6a379e51155d8c87f99

app.get('/peliculas',(req,res)=>{
    res.send(peliculas.SimpleMessage);
});

app.get('/actores',(req,res)=>{
<<<<<<< HEAD
    res.send(actores.SimpleMessage)
})
=======
    res.send(actores.SimpleMessage);
});
>>>>>>> 052d514cc3b05b709a5df6a379e51155d8c87f99

app.listen(process.env.PORT,()=>{
    console.log('Server on port: ', process.env.PORT);
});
