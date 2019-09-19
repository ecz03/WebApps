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
    
    var strConway; //El string final en HTML
    var strLinea = '1'; //Almacena la última línea
    var strTemp = '1'; //Se va escribiendo la siguiente línea
    var contador = 0; //Cuenta de caracteres iguales
    var caracter; //Caracter actual para contar
    
    if (req.params.n < 1){
        strConway = '';
    } else {
        strConway = '1<br>';
        for (var i = 1; i < req.params.n; i++) {
            contador = 0;
            strTemp = '';
            for (var letra = 0; letra < strLinea.length; letra++) {
                if (letra > 0){
                    if (strLinea.charAt(letra) == caracter){
                        contador++;
                    } else {
                        strTemp += contador + caracter;
                        contador = 1;
                        caracter = strLinea.charAt(letra);
                    }
                } else {
                    caracter = strLinea.charAt(letra);
                    contador = 1;
                }
            }
            strTemp += contador + caracter;
            strLinea = strTemp;
            strConway += strTemp + '<br>';
        }
    }
    
    
    res.send('<h1 style="background-color:#3256B0; color:white;">Secuencia de Conway n='+req.params.n+'</h1>' + strConway);
    
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