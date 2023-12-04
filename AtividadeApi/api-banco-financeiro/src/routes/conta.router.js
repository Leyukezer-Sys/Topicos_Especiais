const express = require('express');
const router = express.Router();

const contaController = require('../controllers/conta.controller');

router.get('/contas', contaController.list);

router.post('/conta', contaController.create);

router.put('/conta/:codigo', contaController.update);

router.delete('/conta/:codigo', contaController.destroy);

module.exports = router;