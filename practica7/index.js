/*----------------------------------------------------------
 * Práctica 7: MVC APP 
 * Fecha: 29-Oct-2019
 * Autores:
 *            A01372581 Marcos Eduardo Castañeda Guzmán
 *            A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/

const express = require("express")
const car_brands = require("./routes/car_brands")
var bodyParser=require("body-parser"); 
const methodOverride = require('method-override');

var app = express()
//configuracion mongoose
const mongoose = require("mongoose")
const db_url = 'mongodb://localhost/dbCarBrands'

mongoose.connect(db_url,{userNewUrlParser:true,
useUnifiedTopology:true
})

mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error',
console.error.bind(console,"Error en la conexion"))
app.use(express.json())
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}))
app.engine('html', require("ejs").renderFile);
app.use('/practica7',car_brands)
app.listen(8080,()=>{
    console.log("Servidor corriendo")
})