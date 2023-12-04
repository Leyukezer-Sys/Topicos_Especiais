const express = require('express');
const router = express.Router();

const bancoController = require('../controllers/banco.controller');

router.get('/bancos', bancoController.list);

router.post('/banco', bancoController.create);

router.put('/banco/:codigo', bancoController.update);

router.delete('/banco/:codigo', bancoController.destroy);

module.exports = router;