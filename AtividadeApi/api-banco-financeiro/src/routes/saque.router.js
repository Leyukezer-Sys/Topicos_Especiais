const express = require('express');
const router = express.Router();

const controllerSaque = require('../controllers/saque.controller');

router.get('/saques', controllerSaque.list);

module.exports = router;