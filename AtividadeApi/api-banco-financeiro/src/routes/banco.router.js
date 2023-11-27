const express = require('express');
const router = express.Router();

const bancoController = require('../controllers/banco.controller');

router.get('/bancos', bancoController.list);

module.exports = router;