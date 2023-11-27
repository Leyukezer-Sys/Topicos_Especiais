const express = require('express');
const router = express.Router();

const agenciaController = require('../controllers/agencia.controller');

router.get('/agencias', agenciaController.list);

module.exports = router;