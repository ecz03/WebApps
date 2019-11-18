const express = require("express")
const cards = require("./routes/cards")
var app = express()
//configuracion mongoose
const mongoose = require("mongoose")
const db_url = 'mongodb://localhost/theCrazy88'

mongoose.connect(db_url,{userNewUrlParser:true,
useUnifiedTopology:true
})

mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error',
console.error.bind(console,"Error en la conexion"))
app.use(express.json())
app.use('/cards',cards)
app.listen(8080,()=>{
    console.log("Servidor corriendo")
})
