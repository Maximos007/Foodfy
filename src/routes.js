const express = require('express');
const recipes = require('./data');

const routes = express.Router();

const views = __dirname + '/views/';

routes.get('/', (req, res) => res.render(views + 'index', {recipes}));
routes.get('/about', (req, res) => res.render(views + 'about'));
routes.get('/recipes', (req, res) => res.render(views + 'recipes', {recipes}));
routes.get('/recipes/:index', (req, res) => {
	const recipesIndex = req.params.index;
	const recipe = recipes[recipesIndex];
	if (!recipe) return res.status(404).render(`${views}not-found`);
	return res.render(`${views}recipe`, {recipe});
});

module.exports = routes;

