const xml2js = require("xml2js");
const fs = require("fs");
const archiveXML = fs.readFileSync("movies.xml","utf8");
const util=require("util")


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

exports.SimpleMessage = peliculas
