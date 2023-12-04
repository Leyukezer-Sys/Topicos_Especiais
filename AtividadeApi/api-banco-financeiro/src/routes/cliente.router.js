const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/cliente.controller');

router.get('/clientes', clienteController.list);

router.post('/cliente', clienteController.create);

router.put('/cliente/:codigo', clienteController.update);

router.delete('/cliente/:codigo', clienteController.destroy);

module.exports = router;