// Invocando o express
const express = require('express');

// Criando a variável de rotas
const routes = express.Router();

// Rota "/"
routes.get('/', (req, res) => {
    res.send('Hellow Thiago')
})

// Exportando para a aplicação
module.exports = routes;