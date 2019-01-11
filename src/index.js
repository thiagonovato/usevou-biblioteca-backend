// Invocando o package express
const express = require('express');

// Instanciando a aplicação
const app = express();

// Montando o server
app.get('/', (req, res) => {
    return res.send('Hello World')
});

// Alocando o endereço
app.listen(3000, () => {
    console.log('Server iniciado na porta 3000...')
})