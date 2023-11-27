const express = require('express');
const router = express.Router();

const contaController = require('../controllers/conta.controller');

router.get('/contas', contaController.list);

module.exports = router;