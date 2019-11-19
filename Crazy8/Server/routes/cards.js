/*console.log(`♣`)
console.log(`♠`)
console.log(`♦`)
console.log(`♥`)
*/
const express = require("express");
const router = express.Router();

const controladorCrazy = require("../controllers/cards");

router.post('/nuevo', controladorCrazy.nuevoJuego);

module.exports = router;