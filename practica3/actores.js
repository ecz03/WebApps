/*----------------------------------------------------------
 * Práctica 3: Utilizando XML
 * Fecha: 07-Sep-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const xml2js = require("xml2js");
const fs = require("fs");
const archiveXML = fs.readFileSync("movies.xml","utf8");

var actores = '';
xml2js.parseString(archiveXML,{explicitArray:false},(err,result)=> {
    result.movies.film.forEach((element)=>{
        actores += '<br>' + element.$.name + '<br>';
        if (element.cast != undefined){
            element.cast.forEach((element)=>{
                actores += '&nbsp;&nbsp;&nbsp;' + element.trim() + '<br>';
            }); 
        }
    });
});

exports.SimpleMessage = actores;