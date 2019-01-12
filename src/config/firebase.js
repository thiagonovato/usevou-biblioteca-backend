// Invocando o modulo do firebase
const firebase = require('firebase')

// Dados de configuração para conexão com o Firebase
const config = {
    apiKey: "AIzaSyC8N6c_Btsi7FxVxXTGY81xK7sfRyOhZBA",
    authDomain: "usevou-biblioteca.firebaseapp.com",
    databaseURL: "https://usevou-biblioteca.firebaseio.com",
    projectId: "usevou-biblioteca",
    storageBucket: "usevou-biblioteca.appspot.com",
    messagingSenderId: "79472224154"
};

// Iniciando a conexão com o firebase baseado na configuração
firebase.initializeApp(config);

// Abrindo a conexão com o firestore
const db = firebase.firestore();

// Export dos módulos
module.exports = db