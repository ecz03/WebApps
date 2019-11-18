var bodyParser = require('body-parser');
const Carta = require('../models/cards.js');
const Jugador = require('../models/player.js');
const Crazy = require('../models/crazy8.js');
const mongoose = require('mongoose');

exports.nuevoJuego = (req, res)=>{
    var juegoNuevo = new Crazy({
        juego:req.params.idJuego,
        jugadores:[],
        cartas:[],
        cartaActual:{},
        turno:1,
        estado:"inicializando"
    });
    
    var jugadorNuevo = new Jugador({
        _id:new mongoose.Types.ObjectId(),
        id_jugador:req.params.idJugador,
        nombre:"Jugador " + req.params.idJugador,
        cartas:[]
    });
    
    var baraja = [
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:1,palo:"picas",valor:1,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:2,palo:"picas",valor:2,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:3,palo:"picas",valor:3,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:4,palo:"picas",valor:4,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:5,palo:"picas",valor:5,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:6,palo:"picas",valor:6,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:7,palo:"picas",valor:7,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:8,palo:"picas",valor:8,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:9,palo:"picas",valor:9,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:10,palo:"picas",valor:10,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:11,palo:"picas",valor:11,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:12,palo:"picas",valor:12,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:13,palo:"picas",valor:13,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:14,palo:"corazones",valor:1,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:15,palo:"corazones",valor:2,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:16,palo:"corazones",valor:3,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:17,palo:"corazones",valor:4,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:18,palo:"corazones",valor:5,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:19,palo:"corazones",valor:6,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:20,palo:"corazones",valor:7,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:21,palo:"corazones",valor:8,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:22,palo:"corazones",valor:9,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:23,palo:"corazones",valor:10,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:24,palo:"corazones",valor:11,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:25,palo:"corazones",valor:12,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:26,palo:"corazones",valor:13,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:27,palo:"treboles",valor:1,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:28,palo:"treboles",valor:2,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:29,palo:"treboles",valor:3,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:30,palo:"treboles",valor:4,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:31,palo:"treboles",valor:5,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:32,palo:"treboles",valor:6,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:33,palo:"treboles",valor:7,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:34,palo:"treboles",valor:8,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:35,palo:"treboles",valor:9,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:36,palo:"treboles",valor:10,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:37,palo:"treboles",valor:11,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:38,palo:"treboles",valor:12,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:39,palo:"treboles",valor:13,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:40,palo:"diamantes",valor:1,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:41,palo:"diamantes",valor:2,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:42,palo:"diamantes",valor:3,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:43,palo:"diamantes",valor:4,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:44,palo:"diamantes",valor:5,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:45,palo:"diamantes",valor:6,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:46,palo:"diamantes",valor:7,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:47,palo:"diamantes",valor:8,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:48,palo:"diamantes",valor:9,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:49,palo:"diamantes",valor:10,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:50,palo:"diamantes",valor:11,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:51,palo:"diamantes",valor:12,puntaje:1}),
        new Carta({_id:new mongoose.Types.ObjectId(),id_carta:52,palo:"diamantes",valor:13,puntaje:1})];
    
    var cartaNueva = new Carta({
        _id:new mongoose.Types.ObjectId(),
        id_carta:2,
        palo:"corazones",
        valor:1,
        puntaje:1
    });
    
    
};