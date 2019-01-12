// Invocando as configurações do firebase e seus auxiliares
const db = require('../config/firebase')
const firebaseHelper = require('firebase-functions-helper')

// Exportando as funções dos cartões
module.exports = {
    // Consultar pelo número do cartão
    async findByNumber(req, res) {
        const query = (['nrcartao', '==', req.params.id]);
        await firebaseHelper.firestore
            .queryData(db, 'reserva', query)
            .then(doc => res.status(200).send(doc))
    }
};