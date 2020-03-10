//jshint esversion:6

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(process.env.PORT || 5000, () =>
	console.log('Listening at PORT 5000')
);

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});
