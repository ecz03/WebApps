/*console.log(`♣`)
console.log(`♠`)
console.log(`♦`)
console.log(`♥`)
*/
const express = require("express");
const router = express.Router();

const controladorCrazy = require("../controllers/cards");

router.post('/nuevo', controladorCrazy.nuevoJuego);
router.get('/:idJuego/:idJugador',controladorCrazy.manoJugador)
router.get('/:idJuego',controladorCrazy.Odin);
router.delete('/:idJuego/:idJugador', controladorCrazy.tirarCarta)

module.exports = router;