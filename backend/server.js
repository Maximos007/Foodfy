const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'..', 'frontend', 'public', 'css')));
app.use(express.static(path.join(__dirname,'..', 'frontend', 'public', 'assets')));
app.use(express.static(path.join(__dirname,'..', 'frontend', 'public', 'script')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'frontend', 'index.html'));
});
app.get('/sobre', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'frontend', 'sobre.html'));
});
app.get('/receitas', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..','frontend', 'receitas.html'));
});

app.listen(3333);