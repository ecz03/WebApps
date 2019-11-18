const mongoose = require('mongoose');
const Carta = require('./models/cards.js');
const Jugador = require('./models/player.js');
const Crazy = require('./models/crazy8.js');

mongoose.connect('mongodb://localhost/theCrazy88',{useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;

db.on('error', console.error.bind(console,'Error en la conexión'));
db.once('open',()=>{
    console.log('Conexión exitosa');
    var ascor = new Carta({
        _id:new mongoose.Types.ObjectId(),
        id_carta:2,
        palo:"corazones",
        valor:1,
        puntaje:1
    });
    
    var diezpicas = new Carta({
        _id:new mongoose.Types.ObjectId(),
        id_carta:10,
        palo:"picas",
        valor:10,
        puntaje:1
    });
    
    diezpicas.save()
    
    ascor.save((err)=>{
        if (err) throw err;
        var jugador = new Jugador({
        _id:new mongoose.Types.ObjectId(),
        id:1,
        nombre:"Netuki",
        cartas:[{_id:ascor._id,palo:ascor.palo,valor:ascor.valor},
                {_id:diezpicas._id,palo:diezpicas.palo,valor:diezpicas.valor}]
    });
    
    jugador.save((err)=>{
        if (err) throw err;
        db.close();
    });
    
    })
    
    
});