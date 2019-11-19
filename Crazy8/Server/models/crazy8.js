const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CrazySchema = new Schema({
   juego : {type:Number},
   jugadores : [{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Jugador'},
                id_jugador:{type:Number},
                nombre:{type:String},
                cartas:[{
                    _id:{type:mongoose.Schema.Types.ObjectId,ref: 'Carta'},
                    id_carta:{type:Number},
                    palo:{type:String},
                    valor:{type:Number},
                    puntaje:{type:Number}
                }]
        }],
   cartas:[{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Carta'},
                id_carta:{type:Number},
                palo:{type:String},
                valor:{type:Number},
                puntaje:{type:Number}
        }],
   cartaActual :{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Carta'},
                id_carta:{type:Number},
                palo:{type:String},
                valor:{type:Number},
                puntaje:{type:Number}
        },
   turno : {type:Number},
   estado: {type:String},
   paloOcho: {type:String}
},{collection:'theCrazy88'});

module.exports= mongoose.model('Crazy',CrazySchema)