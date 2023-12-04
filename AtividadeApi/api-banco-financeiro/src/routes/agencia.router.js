const express = require('express');
const router = express.Router();

const agenciaController = require('../controllers/agencia.controller');

router.get('/agencias', agenciaController.list);

router.post('/agencia', agenciaController.create);

router.put('/agencia/:codigo', agenciaController.update);

router.delete('/agencia/:codigo', agenciaController.destroy);

module.exports = router;