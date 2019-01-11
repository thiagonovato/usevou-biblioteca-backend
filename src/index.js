// Invocando o package express
const express = require('express');

// Invocando o Firebase
const firebase = require('./config/firebase')

// Instanciando a aplicação
const app = express();

// Invocando o arquivo de rotas
app.use(require('./routes'));

// Alocando o endereço
app.listen(3000, () => {
    console.log('Server iniciado na porta 3000...')
})