const express = require('express');

const app = express();

app.get('/', function (request, response) {
  return response.send('API Funcionando...');
});

app.listen(3000, function () {
  console.log('API iniciada na porta: 3000');
});
