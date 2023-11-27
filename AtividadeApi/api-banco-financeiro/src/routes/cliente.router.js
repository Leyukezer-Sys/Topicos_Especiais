const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/cliente.controller');

router.get('/clientes', clienteController.list);

module.exports = router;