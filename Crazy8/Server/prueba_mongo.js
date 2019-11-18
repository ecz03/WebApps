const mongoose = require('mongoose');
const Carta = require('./models/cards.js');
const Jugador = require('./models/player.js');
const Crazy = require('./models/crazy8.js');

mongoose.connect('mongodb://localhost/theCrazy88',{useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;

db.on('error', console.error.bind(console,'Error en la conexión'));
db.once('open',()=>{
    console.log('Conexión exitosa');
    var cartaNueva = new Carta({
        _id:new mongoose.Types.ObjectId(),
        id_carta:2,
        palo:"corazones",
        valor:1,
        puntaje:1
    });
    
    var jugadorNuevo = new Jugador({
        _id:new mongoose.Types.ObjectId(),
        id_jugador:1,
        nombre:"Netuki",
        cartas:[]
    });
    
    var juegoNuevo = new Crazy({
        juego:1,
        jugadores:[],
        cartas:[],
        cartaActual:{},
        turno:1,
        estado:"en curso"
    });
    
    juegoNuevo.save(()=>{
        Crazy.find({juego: 1}, (err, resultado)=>{
            if (err) throw err;
            console.log('Turno: ',resultado[0].turno);
        }).then(()=>{
            Crazy.updateOne({juego:1},{$addToSet:{jugadores:jugadorNuevo}},(err,succ)=>{
                if (err) console.log(err);
                console.log(succ);
            }).then(()=>{
                Crazy.updateOne({juego:1, 'jugadores.id_jugador':1},{$addToSet:{'jugadores.0.cartas':cartaNueva}},(err,succ)=>{
                    if (err) console.log(err);
                    console.log(succ);
                    db.close();
                });
            });
            console.log("Fin");
        });
    });
    
});