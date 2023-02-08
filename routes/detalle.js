const express = require('express');
const router = express.Router();
const controlador =  require('../controllers/productsController');

router.get('/', controlador.index);
router.get('/:id', controlador.buscar)

module.exports = router;