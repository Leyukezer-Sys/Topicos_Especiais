const express = require('express');
const router = express.Router();

const controllerTransferencia = require('../controllers/transferencia.controller');

router.get('/transferencias', controllerTransferencia.list);

module.exports = router;