// Invocando as configurações do firebase e seus auxiliadres
const db = require('../config/firebase')
const firebaseHelper = require('firebase-functions-helper')

// Exportando as funções dos cartões
module.exports = {
    // Listar todos os cartões
    async index(req, res) {
        await firebaseHelper.firestore
            .backup(db, 'cards')
            .then(data => res.status(200).send(data))
    },

    // Salvar um cartão
    async save(req, res) {
        await firebaseHelper.firestore
            .createNewDocument(db, 'cards', req.body);

        res.send(req.body)
    },

    // Consultar um cartão pelo ID do Firestore
    async find(req, res) {
        await firebaseHelper.firestore
            .getDocument(db, 'cards', req.params.id)
            .then(doc => res.status(200).send(doc))
    },

    // Consultar pelo número do cartão
    async findByNumber(req, res) {
        const query = ['number', '==', req.params.id];
        await firebaseHelper.firestore
            .queryData(db, 'cards', query)
            .then(doc => res.status(200).send(doc))
    }
};