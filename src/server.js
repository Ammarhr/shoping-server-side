const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const signupRoute = require('./routs/signup');
const signInRoute = require('./routs/signin');
const productRoute = require('./routs/product');
const categoryRoute = require('./routs/category');
const admin = require('./routs/admin');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(signupRoute);
app.use(signInRoute);
app.use(categoryRoute);
app.use(productRoute);
app.use(admin);

app.get('*', (req, res) => {
    res.status(404).send('page not found');
});

const server = {
    app: app,
    start: (PORT) => {
        app.listen(PORT, () => {
            console.log('we are on port' + PORT);
        })
    }
}

module.exports = server;