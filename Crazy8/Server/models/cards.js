const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var JugadorSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id : {Number, min:1, max:6},
        nombre: String,
        cartas:[CartaSchema]
    });

var CartaSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id: {type:Number},
        palo : {type:String},
        valor :{type:Number, min:1, max:14},
        puntaje: {type:Number}
    });

var CrazySchema = new Schema({
   juego : {type:Number},
   jugadores : [JugadorSchema],
   cartas : [CartaSchema],
   cartaActual : CartaSchema,
   turno : {type:Number},
});

module.exports= mongoose.model('Crazy',CrazySchema)
module.exports= mongoose.model('Jugador',JugadorSchema)
module.exports= mongoose.model('Carta',CartaSchema)