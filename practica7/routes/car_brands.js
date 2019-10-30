/*----------------------------------------------------------
 * Práctica 7: MVC APP 
 * Fecha: 29-Oct-2019
 * Autores:
 *            A01372581 Marcos Eduardo Castañeda Guzmán
 *            A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const express = require("express")
const router = express.Router()

const controladorCarBrad = require("../controllers/car_brands")

router.get('/', controladorCarBrad.practica7)
router.get('/Crear', controladorCarBrad.crearBrand)
router.post('/Crear', controladorCarBrad.registrarBrand)
router.get('/Consulta', controladorCarBrad.formularioBrand)
router.get('/:marca/Consulta', controladorCarBrad.consultarBrand)
router.get('/Actualizar',controladorCarBrad.oneToUpdateBrand)
router.put('/Actualizar',controladorCarBrad.actualizarBrand)
router.delete('/Eliminar',controladorCarBrad.eliminarBrand)
router.get('/Eliminar',controladorCarBrad.oneToKillBrand)

module.exports = router;