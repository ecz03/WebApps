const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CartaSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id_carta: {type:Number},
        palo : {type:String},
        valor :{type:Number},
        puntaje: {type:Number}
    },{collection:'cartas'});

module.exports= mongoose.model('Carta',CartaSchema)
