const express = require('express');
const path= require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();

app.use(express.json());

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

app.get('/', (req, res) => {
    res.render('bankaccounts');
})

app.get('/redirect', (req,res) => {
    console.log(req.body);
    res.send();
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
