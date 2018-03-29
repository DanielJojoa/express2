//'use strict'
const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const routes = require('./routes');
const routes = require('./routes');

app = express();
app.use(morgan('combined'));
app.set('views', __dirname + '/views/')
app.set('view engine', 'pug');
app.use(routes);
app.listen(3000, () => console.log('Iniciando express en el puerto 3000'));  

