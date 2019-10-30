/*----------------------------------------------------------
 * Práctica 7: MVC APP 
 * Fecha: 29-Oct-2019
 * Autores:
 *            A01372581 Marcos Eduardo Castañeda Guzmán
 *            A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
var bodyParser=require("body-parser"); 

const CarBrand = require("../models/car_brands");
const path = require("path")

exports.practica7 = (req,res) =>{
    res.sendFile('index.html',{root:"../practica7/views"});
};

exports.crearBrand = (req,res) => {
    res.sendFile('create_brand.html',{root:"../practica7/views"});
};

exports.registrarBrand = (req,res) => {
     var car_brand = new CarBrand(
        {
            marca:req.body.marca,
            establecimiento:req.body.establecimiento,
            origen:req.body.origen,
            url:req.body.url
        }
        );
        car_brand.save((err)=>{
            var estado = 0
            if (err){
                estado = 1;
                res.render(path.join(__dirname+'/../views/maybe.html'),{estado:estado});
                throw err;
            }
            console.log(estado)
            res.render(path.join(__dirname+'/../views/maybe.html'),{estado:estado});
        });
}

exports.formularioBrand = (req,res) => {
   res.sendFile('formulario.html',{root:"../practica7/views"});  
};

exports.consultarBrand = (req,res) => {
    CarBrand.findOne({marca:req.params.marca},{"_id":0,"marca":1,"establecimiento":1,"origen":1,"url":1},(err,brand_car)=>{
        if (err) throw err
        console.log(brand_car)
        res.render(path.join(__dirname+'/../views/show_brand.html'),{carros:brand_car});
    })
    
};

exports.oneToKillBrand = (req,res) => {
    CarBrand.find({},{"_id":0,"marca":1,"establecimiento":1,"origen":1,"url":1},(err,brand_car)=>{
        if (err) throw err
        console.log(brand_car)
        res.render(path.join(__dirname+'/../views/decapitate_brand.html'),{carros:brand_car});
    })
    
};

exports.oneToUpdateBrand = (req,res) => {
    CarBrand.find({},{"_id":0,"marca":1,"establecimiento":1,"origen":1,"url":1},(err,brand_car)=>{
        if (err) throw err
        console.log(brand_car)
        res.render(path.join(__dirname+'/../views/modify_brand.html'),{carros:brand_car});
    })
};
exports.actualizarBrand = (req,res) => {
    var filter = {marca:req.body.marca}
    var update = {establecimiento:req.body.establecimiento,origen:req.body.origen,url:req.body.url}
    CarBrand.findOneAndUpdate(filter,update,{new:true},(err,producto)=>{
        var estado = 0
        if (err){
            estado = 1;
            res.render(path.join(__dirname+'/../views/maybe.html'),{estado:estado});
            throw err;
        }
        console.log(estado)
        res.render(path.join(__dirname+'/../views/maybe.html'),{estado:estado});
    })
};

exports.eliminarBrand = (req,res) => {
  CarBrand.findOneAndRemove({marca:req.body.marca},(err)=>{
      var estado = 0
      if (err){
            estado = 1;
            res.render(path.join(__dirname+'/../views/maybe.html'),{estado:estado});
            throw err;
        }
        console.log(estado)
        res.render(path.join(__dirname+'/../views/maybe.html'),{estado:estado});
  })  
};