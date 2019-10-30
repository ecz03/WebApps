/*----------------------------------------------------------
 * Práctica 7: MVC APP 
 * Fecha: 29-Oct-2019
 * Autores:
 *            A01372581 Marcos Eduardo Castañeda Guzmán
 *            A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CarBrandSchema = new Schema({
   marca : {type:String, require:[true, "Escribe la marca de tu auto"], max:100},
   establecimiento : {type:Number, require:[true, "¿En que año se establecio tu marca?"]},
   origen : {type:String, require:[true, "Escribe el país de origen"]},
   url : {type:String, require:[true, "¡Deja el link de su página!"]}
});

module.exports= mongoose.model('CarBrand',CarBrandSchema)