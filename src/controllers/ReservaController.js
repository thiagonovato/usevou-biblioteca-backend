// Invocando as configurações do firebase e seus auxiliares
const db = require('../config/firebase')
const firebaseHelper = require('firebase-functions-helper')

// Exportando as funções das Reservas
module.exports = {
    // Salva uma reserva
    async save(req, res) {
        await firebaseHelper.firestore
            .createNewDocument(db, 'reserva', req.body);

        res.send(req.body)
    },

    // Apagar uma reserva
    async delete(req, res) {
        let id = req.params.id;
        await firebaseHelper.firestore
            .deleteDocument(db, 'reserva', id)
            .then(doc => res.status(200).send(doc))
    },

    // Consultar reserva pelo número do cartão
    async findByNumber(req, res) {
        const query = ['nrcartao', '==', req.params.id];
        await firebaseHelper.firestore
            .queryData(db, 'reserva', query)
            .then(doc => res.status(200).send(doc))
    },

    // Consultar pelo id do livro
    async findByIdLivro(req, res) {
        const query = ['idlivro', '==', req.params.id];
        await firebaseHelper.firestore
            .queryData(db, 'reserva', query)
            .then(doc => res.status(200).send(doc))
    },

};