const express = require('express');
const router = express.Router();
router
    .get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
    //uso de parámetros en Express, la notacion de un parámetro en la ruta es con :nom_parametro
    //y eparado por guiones en caso de que hayan mas parámetros /:par1-:par2
    .get('/user/:id-:name-:age', (req, res) => {
        res.end('hola soy ' + req.params['name']);
    })
    //la variable S se la envia por la dirección de navegacion /search?s="valor"
    .get('/search', (req, res) => {
        res.send('Los resultados de la busqueda son:' + req.query.s);
    })
    // El metodo redirect reedirecciona a la dirección que se le indique
    .get('/redirect', (req, res) => {
        res.redirect(301, 'http://http://www.udenar.edu.co/');
    })
    //El método json retorna obhetos en notación JSON
    .get('/json', (req, res) => {
        res.json({
            name: "Daniel",
            semester: "11",
            city: "Pasto"
        });
    })
    // EL metodo render renderiza las plantillas, segun el motor que se use,html,pug,jse etc..
    .get('/render_ejs', (req, res) => {
        res.render('index.ejs');
    })
    .get('/render_pug', (req, res) => {
        res.render('index.pug');
    }) 

    module.exports = router; // exportar el módulo routes