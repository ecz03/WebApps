const express = require("express")
const path = require("path")
const app = express()
const view_dir = './view/'
var peliculas = require('./peliculas.js')
var actores = require('./actores.js')

app.get('/',(req,res)=>{
    res.send('Hola al Mundo del Cine')
})

app.get('/peliculas',(req,res)=>{
    res.send(peliculas.SimpleMessage)
})

app.get('/actores',(req,res)=>{
    res.send(actores.SimpleMessage)
})


app.listen(process.env.PORT,()=>{
    console.log('Server on port: ', process.env.PORT)
});
