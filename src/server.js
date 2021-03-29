const express = require('express');
const server = express();
const routes = require('./routes');

server.set('view engine', 'ejs');

// habilitar arquivos statics
server.use(express.static('public'));

server.use(routes);

server.listen(3333, () => console.log('server is running'));