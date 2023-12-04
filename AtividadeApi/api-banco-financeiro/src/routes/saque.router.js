const express = require('express');
const router = express.Router();

const controllerSaque = require('../controllers/saque.controller');

router.get('/saques', controllerSaque.list);

router.post('/saque', controllerSaque.create);

router.delete('/saque/:codigo', controllerSaque.destroy);

module.exports = router;