const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/', navigationController.getHome)

router.get('/voltaje', navigationController.getVoltaje);
router.post('/voltaje', navigationController.calcularVoltaje);

router.get('/corriente', navigationController.getCorriente);
router.post('/corriente', navigationController.calcularCorriente);

router.get('/resistencia', navigationController.getResistencia);
router.post('/resistencia', navigationController.calcularResistencia);

module.exports = router;