const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CrazySchema = new Schema({
   juego : {type:Number},
   jugadores : [{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Jugador'},
                nombre:{type:String},
                id_juagdor:{type:Number}
        }],
   cartas:[{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Carta'},
                palo:{type:String},
                valor:{type:Number}
        }],
   cartaActual :{_id:{type: mongoose.Schema.Types.ObjectId,
                ref: 'Carta'},
                palo:{type:String},
                valor:{type:Number}
        },
   turno : {type:Number},
},{collection:'theCrazy8'});

module.exports= mongoose.model('Crazy',CrazySchema)