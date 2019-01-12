// Invocando as configurações do firebase e seus auxiliadres
const db = require('../config/firebase')
const firebaseHelper = require('firebase-functions-helper')

// Exportando as funções de categorias
module.exports = {
    // Lista as categorias
    async listcategoria(req, res) {
        let id = req.params.id;
        const queryArray = ['category', '==', id];
        await firebaseHelper.firestore
            .queryData(db, 'books', queryArray)
            .then(data => res.status(200).send(data))
    }
}
