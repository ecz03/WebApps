module.exports.consult_sups = (conexion,res) => {
    conexion.connect((err)=>{
        if (err) throw err;
        console.log('Conectado con ID:',conexion.threadId);
        let con = "SELECT * FROM superheroes ORDER BY Sexo, IdentidadSecreta";
        conexion.query(con,(err,result)=>{
            if (err) throw err;
            console.log(result);
            conexion.end();
            res.render('index.html',{sups:result});
        })
    });
};