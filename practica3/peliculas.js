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

var peliculas = '';

xml2js.parseString(archiveXML,{explicitArray:false},(err,result)=> {
	result.movies.film.forEach((element)=>{
	    if (element.director != undefined){
	        peliculas += '<br>' + element.$.name + ' (' + element.$.year.trim() + '), director: ' + element.director.trim() + '<br>';
	    }else{
	        peliculas += '<br>' + element.$.name + ' (' + element.$.year.trim() + ')<br>';
	    }
	});
});

exports.SimpleMessage = peliculas;
