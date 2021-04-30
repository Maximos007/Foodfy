const express = require('express');
const server = express();
const routes = require('./routes');

server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// habilitar arquivos statics
server.use(express.static('public'));

server.use(routes);

server.listen(3333, () => console.log('server is running'));