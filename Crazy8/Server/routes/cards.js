/*console.log(`♣`)
console.log(`♠`)
console.log(`♦`)
console.log(`♥`)
*/
const express = require("express");
const router = express.Router();

const controladorCrazy = require("../controllers/cards");


router.get('/playerCount', controladorCrazy.obtenerConectados);
router.post('/players', controladorCrazy.nombrarJugador);
router.get('/players', controladorCrazy.obtenerJugadores);
router.post('/nuevo', controladorCrazy.nuevoJuego);
router.get('/:idJuego/:idJugador',controladorCrazy.manoJugador);
router.get('/:idJuego',controladorCrazy.Odin);
router.delete('/:idJuego/:idJugador', controladorCrazy.tirarCarta);
router.post('/:idJuego/:idJugador', controladorCrazy.pasar);
router.put('/:idJuego/:idJugador', controladorCrazy.tomarCarta);



module.exports = router;