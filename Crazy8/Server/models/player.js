const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var JugadorSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id_jugador : {type:Number},
        nombre: {type:String},
        cartasJugador:[{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Carta'},
                id_carta:{type:Number},
                palo:{type:String},
                valor:{type:Number},
                puntaje:{type:Number}
        }]
    },{collection:'jugadores'});

module.exports= mongoose.model('Jugador',JugadorSchema)