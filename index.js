// Configuramos nuestras dependencias
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Obtenemos la rutas de nuestra API

const api = require('./routes/api');

const app = express();

// Parseamos nuestra Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// sesteamos nuestras API Routes
app.use('/', api);

// configurmos nuestro puerto donde nos escuchara la applicacion
const port = process.env.PORT || '3000';
app.set('port', port);

// creamos nuestro servidor http
const server = http.createServer(app);

// Listen de nuestra app mandamos un console.log para que nos mande el estado de el servidor
server.listen(port, () => console.log(`API running ${port}`));