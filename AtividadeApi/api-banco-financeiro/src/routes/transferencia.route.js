const express = require('express');
const router = express.Router();

const controllerTransferencia = require('../controllers/transferencia.controller');

router.get('/transferencias', controllerTransferencia.list);

router.post('/transferencia', controllerTransferencia.create);

router.delete('/transferencia/:codigo', controllerTransferencia.delete);

module.exports = router;