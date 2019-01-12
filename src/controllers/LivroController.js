// Invocando as configurações do firebase e seus auxiliadres
const db = require('../config/firebase')
const firebaseHelper = require('firebase-functions-helper')

// Exportando as funções dos livros
module.exports = {
    // Lista os livros
    async index(req, res) {
        await firebaseHelper.firestore
            .backup(db, 'books')
            .then(data => res.status(200).send(data))
    },

    // Salva um novo livro
    async save(req, res) {
        await firebaseHelper.firestore
            .createNewDocument(db, 'books', req.body);

        res.send(req.body)
    },

    // Consultar pelo id do livro
    async findByIdLivro(req, res) {
        let id = req.params.id;
        await firebaseHelper.firestore
            .getDocument(db, 'books', id)
            .then(doc => res.status(200).send(doc))
    }
};