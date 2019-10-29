const express = require("express")
const router = express.Router()

const controladorCarBrad = require("../controllers/car_brands")

router.get('/', controladorCarBrad.practica7)
router.get('/Crear', controladorCarBrad.crearBrand)
router.post('/Crear', controladorCarBrad.registrarBrand)
router.get('/Consulta', controladorCarBrad.formularioBrand)
router.get('/:marca/Consulta', controladorCarBrad.consultarBrand)
router.put('/Actualizar',controladorCarBrad.actualizarBrand)
router.delete('/Eliminar',controladorCarBrad.eliminarBrand)

module.exports = router;