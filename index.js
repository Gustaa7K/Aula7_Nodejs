const express = require('express');
const { randomUUID } = require('crypto');
const usuarioController = require('./usuarioController');
const pessoaController = require('./pessoaController'); // Importando novo controller
const app = express();

app.use(express.json());
app.use('/usuario', usuarioController);
app.use('/pessoas', pessoaController); // Definindo a rota para as pessoas

// Start Server 
app.listen(3000, () => console.log('Server is running on port 3000'));




