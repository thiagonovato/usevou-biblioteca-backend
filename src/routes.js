// Invocando o express
const express = require('express');

// Criando a variável de rotas
const routes = express.Router();

// Importando os Controllers
const LivroController = require('./controllers/LivroController')
const CartaoController = require('./controllers/CartaoController')
const ReservaController = require('./controllers/ReservaController')

//Livros
// Lista os livros
routes.get('/livros', LivroController.index);
// Salva um novo livro
routes.post('/livros', LivroController.save);
// Consultar pelo id do livro
routes.get('/livro/:id', LivroController.findByIdLivro);

// Cartões
// Consulta reserva pelo número do cartão
routes.get('/reservascartao/:id', CartaoController.findByNumber)

// Reservas
// Salva uma reserva
routes.post('/reserva', ReservaController.save);
// Consultar reserva pelo número do cartão
routes.get('/reserva/:id', ReservaController.findByNumber);
// Consultar pelo id do livro
routes.get('/reservalivro/:id', ReservaController.findByIdLivro);
// Devolver livro
routes.get('/devolvelivro/:id', ReservaController.delete);


// Exportando para a aplicação
module.exports = routes;