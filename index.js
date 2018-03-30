//'use strict'
const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const routes = require('./routes');
const routesApi = require('./routes_api');

app = express();
app.use(morgan('combined'));
app.set('views', __dirname + '/views/')
app.set('view engine', 'pug');
app.use(routes);
app.use('/api',routesApi);
 // En este método se  captura el error al ingresar un adirección no váida.
app.get('*', (req, res) => { res.end('Ruta no encontrada') })
app.listen(3000, () => console.log('Iniciando express en el puerto 3000'));  

