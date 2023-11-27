const express = require('express');
const router = express.Router();

const controllerDeposito = require('../controllers/deposito.controller');

router.get('/depositos', controllerDeposito.list);

module.exports = router;