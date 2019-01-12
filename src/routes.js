// Invocando o express
const express = require('express');

// Criando a variável de rotas
const routes = express.Router();

// Importando os Controllers
const LivroController = require('./controllers/LivroController')
const CartaoController = require('./controllers/CartaoController')

//Livros
routes.get('/livros', LivroController.index);
routes.post('/livros', LivroController.salvar);

// Cartões
routes.get('/cartao', CartaoController.index);
routes.post('/cartao', CartaoController.save);
//routes.get('/cartao/:id', CartaoController.find);
routes.get('/cartao/:id', CartaoController.findByNumber)

// Exportando para a aplicação
module.exports = routes;