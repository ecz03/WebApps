/*----------------------------------------------------------
 * Práctica 4: Utilizando Express
 * Fecha: 13-Sep-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernesto Cruz López
 *----------------------------------------------------------*/

const express = require('express');
const app = express();

app.use(express.json()); //Middleware

var userpass = {"usuario":"contrasena", "mark":"12345", "neto":"netuki"};

app.get('/conway/:n', (req, res) => { //Secuencia look and say
    
    var seed = 1;
    var htmlPart= '';
    for (var i = 0; i < req.params.n; i++) {
        htmlPart += '<li style=color:gray>'+seed + '</li>';
        var result = '',
        chars = (seed + ' ').split(''),
        lastChar = chars[0],
        times = 0;
 
    chars.forEach(function(nextChar) {
        if (nextChar === lastChar) {
            times++;
        }
        else {
            result += (times + '') + lastChar;
            lastChar = nextChar;
            times = 1;
        }
    });
    seed = result;
    }
    res.send('<!DOCTYPE html><html lang="es"><head><title>Conway Look and Say</title><style> \
    ol {                    \
    margin: 0 0 1.5em;     \
    padding: 0;            \
    counter-reset: item;   \
    }                        \
    ol > li {                \
    margin: 0;             \
    padding: 0 0 0 2em;    \
    text-indent: -2em;     \
    list-style-type: none;  \
    counter-increment: item;  \
    }                           \
    ol > li:before {            \
    display: inline-block;    \
    width: 1em;               \
    padding-right: 0.5em;     \
    font-weight: bold;        \
    text-align: right;        \
    content: counter(item) "."; color:black;\
    }</style></head><body><h1 style="background-color:#3256B0; \
    color:white;">Secuencia de Conway n=' + req.params.n + 
    '</h1><ol>' + htmlPart + '</ol><div><hr>2019 por Marcos Castañeda \
    (A01372581) y Ernesto Cruz(A01169052)</div></body></html>');
    
});

app.post('/login',(req, res) => { //Usuario y password
    if (req.body.contrasena == userpass[req.body.usuario]){
        res.send('usuario válido');
    } else {
        res.send('usuario inválido');
    }
});

app.listen(process.env.PORT, () => {
    console.log('El servidor está corriendo');
});