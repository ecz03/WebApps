module.exports.consulta = (conexion,res) => {
    conexion.connect((err)=>{
        if (err) throw err;
        console.log('Conectado con ID:',conexion.threadId);
        let con = "SELECT * FROM lenguajes ORDER BY anio DESC";
        conexion.query(con,(err,result)=>{
            if (err) throw err;
            console.log(result);
            conexion.end();
            res.render('list_language.html',{lenguajes:result});
        });
    });
};