const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var JugadorSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id_juagdor : {type:Number},
        nombre: {type:String},
        cartas:[{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Carta'},
                palo:{type:String},
                valor:{type:Number}
        }]
    },{collection:'jugadores'});

module.exports= mongoose.model('Jugador',JugadorSchema)