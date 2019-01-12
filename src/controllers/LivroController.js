// Invocando as configurações do firebase e seus auxiliadres
const db = require('../config/firebase')
const firebaseHelper = require('firebase-functions-helper')

// Exportando as funções dos livros
module.exports = {
    // Listar todos os livros
    async index(req, res) {
        await firebaseHelper.firestore
            .backup(db, 'books')
            .then(data => res.status(200).send(data))
    },

    // Salvar um livro
    async salvar(req, res) {
        await firebaseHelper.firestore
            .createNewDocument(db, 'books', req.body);

        res.send(req.body)
    }
};