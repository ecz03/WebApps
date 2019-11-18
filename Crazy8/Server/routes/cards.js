/*console.log(`♣`)
console.log(`♠`)
console.log(`♦`)
console.log(`♥`)
*/
const express = require("express");
const router = express.Router();

const controladorCrazy = require("../controllers/cards");

router.get('/:idJuego/:idJugador', controladorCrazy.nuevoJuego);

module.exports = router;