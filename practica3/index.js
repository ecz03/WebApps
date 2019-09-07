/*----------------------------------------------------------
 * Práctica 3: Utilizando XML
 * Fecha: 07-Sep-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const express = require("express");
const app = express();
var peliculas = require('./peliculas.js');
var actores = require('./actores.js');

app.get('/',(req,res)=>{
    res.send('Hola al Mundo del Cine');
});

app.get('/peliculas',(req,res)=>{
    res.send(peliculas.SimpleMessage);
});

app.get('/actores',(req,res)=>{
    res.send(actores.SimpleMessage);
});

app.listen(process.env.PORT,()=>{
    console.log('Server on port: ', process.env.PORT);
});
