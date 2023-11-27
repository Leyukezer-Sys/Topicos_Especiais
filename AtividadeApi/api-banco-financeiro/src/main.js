const express = require('express');
const app = express();

app.use(express.json());

const rota_principal = require('./routes/principal.router');
app.use(rota_principal);

const bancoRouter = require('./routes/banco.router');
app.use(bancoRouter);

const agenciaRouter = require('./routes/agencia.router');
app.use(agenciaRouter);

const clienteRouter = require('./routes/cliente.router');
app.use(clienteRouter);

const contaRouter = require('./routes/conta.router');
app.use(contaRouter);

const depositoRouter = require('./routes/deposito.router');
app.use(depositoRouter);

const saqueRouter = require('./routes/saque.router');
app.use(saqueRouter);

const transferenciaRouter = require('./routes/transferencia.route');
app.use(transferenciaRouter);

app.listen(8080, function () {
    console.log('API FUNCIONANDO NA PORTA 8080...')
});