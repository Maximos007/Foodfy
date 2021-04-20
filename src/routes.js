const express = require('express');
const recipes = require('./data');

const routes = express.Router();

const views = __dirname + '/views/';

routes.get('/', (req, res) => res.render(views + 'index', {recipes}));
routes.get('/sobre', (req, res) => res.render(views + 'sobre'));
routes.get('/receitas', (req, res) => res.render(views + 'receitas', {recipes}));
routes.get('/not-found', (req, res) => res.render(views + 'not-found'));

module.exports = routes;

