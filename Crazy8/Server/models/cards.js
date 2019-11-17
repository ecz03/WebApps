const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var jugadorSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id : {Number, min:1, max:6},
        nombre: String,
        cartas:[cartaSchema]
    });

var cartaSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id: {type:Number},
        palo : {type:String},
        valor :{type:Number, min:1, max:14},
        puntaje: {type:Number}
    });

var CrazySchema = new Schema({
   juego : {type:Number},
   jugadores : [jugadorSchema],
   cartas : [cartaSchema],
   cartaActual : cartaSchema,
   turno : {type:Number},
});

module.exports= mongoose.model('Crazy',CrazySchema)
