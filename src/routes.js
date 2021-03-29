const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/';

routes.get('/', (req, res) => res.render(views + 'index'));
routes.get('/sobre', (req, res) => res.render(views + 'sobre'));
routes.get('/receitas', (req, res) => res.render(views + 'receitas'));

module.exports = routes;

