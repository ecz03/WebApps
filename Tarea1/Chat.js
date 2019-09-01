/*----------------------------------------------------------
 * Tarea 1: Chat
 * Fecha: 01-Sep-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const net = require('net')
const hosts = {}

net.createServer( socket => {
    
    socket.nombre = socket.remoteAddress + ':' + socket.remotePort
    hosts[socket.remotePort] = socket
    console.log(socket.nombre + ' se conectó')
    socket.on('data',(data)=>{
        for (var key in hosts){
             if (hosts[key]!=socket){
                 hosts[key].write(socket.remotePort+'> '+data)
             }
        }
    });
    
    socket.on('end',()=>{
        console.log(socket.nombre + ' se desconectó');
    });
    
}).listen(process.env.PORT);
console.log('Servidor TCP corriendo en el puerto ' + process.env.PORT);