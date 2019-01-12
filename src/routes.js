// Invocando o express
const express = require('express');

// Criando a variável de rotas
const routes = express.Router();

// Importando os Controllers
const LivroController = require('./controllers/LivroController')

// Listando os livros
routes.get('/livros', LivroController.index);

// Exportando para a aplicação
module.exports = routes;