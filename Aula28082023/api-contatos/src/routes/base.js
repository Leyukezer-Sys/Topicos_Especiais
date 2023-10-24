const express = require('express');
const router = express.Router();

//rotas
router.get('/', function (req, res) {
    return res.send('API Funcionando...')
})

module.exports = router;