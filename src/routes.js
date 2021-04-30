const express = require('express');
const recipes = require('./data');

const routes = express.Router();

const views = __dirname + '/views/';

routes.get('/', (req, res) => res.render(views + 'index', {recipes}));
routes.get('/about', (req, res) => res.render(views + 'about'));
routes.get('/recipes', (req, res) => res.render(views + 'recipes', {recipes}));
routes.get('/recipes/:index', (req, res) => {
	const recipesIndex = req.params.index;
	return res.render(views + 'recipe', {recipe: recipes[recipesIndex]});

	// const recipeIndex = req.params.index;

	// console.log(recipes[recipeIndex]);

});

module.exports = routes;

