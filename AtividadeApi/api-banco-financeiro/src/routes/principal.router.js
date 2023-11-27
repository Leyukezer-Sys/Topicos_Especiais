const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.send('<center><h1>Api Agencia Bancaria</h1></center>');
});

module.exports = router;