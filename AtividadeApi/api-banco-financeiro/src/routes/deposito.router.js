const express = require('express');
const router = express.Router();

const controllerDeposito = require('../controllers/deposito.controller');

router.get('/depositos', controllerDeposito.list);

router.post('/deposito', controllerDeposito.create);

router.delete('/deposito/:codigo', controllerDeposito.destroy);

module.exports = router;