const express = require("express")
const mysql = require("mysql")
const path = require("path")
const app = express();
const bodyParser = require("body-parser") 
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))

const config = {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'p6'
};

app.get('/agregar',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/add_language.html'))
});

app.get('/eureka',(req,res) =>{
   res.sendFile(path.join(__dirname+'/views/eureka.html')) 
});

app.get('/lista',(req,res) =>{
   res.sendFile(path.join(__dirname+'/views/list_language.html')) 
});

app.get('/',(req,res) =>{
   res.sendFile(path.join(__dirname+'/views/index.html')) 
});

/*
app.post('/login',(req,res)=>{
  var usuario = req.body.usuario;
  var password = req.body.password;
  const conexion = mysql.createConnection(config);
  if (usuario && password){
      conexion.query('SELECT * FROM cuenta WHERE nombre = ? AND password = ?',[usuario,password],(err,resultado,campos)=>{
         if (resultado.length > 0){
             res.redirect('/inicio')
         } else{
             res.send('Usuario y/o password incorrectos');
         }
         res.end()
      });
  }else{
      res.send('Por favor ingresa tu usuario y contraseña')
      conexion.end()
  }
  conexion.end()
});
*/
app.listen(8080, ()=> {
    console.log("Servidor en linea");
});