/*----------------------------------------------------------
 * Práctica 2: Servidor de knock, knock
 * Fecha: 30-Ago-2019
 * Autores:
 *           A01372581 Marcos Eduardo Castañeda Guzmán
 *           A01169052 Ernestro Cruz López
 *----------------------------------------------------------*/
const net = require('net');
const x = ['Canoe!', 'Who!', 'Lettuce', 'Honey bee', 'Wooden shoe', 'A broken pencil', 'Cow says', 'Double', 'Mikey!', 'Atch'];
const y = ['Canoe come out and play with me today?', 'That\'s what an owl says!', 'Lettuce in, it’s cold out here', 'Honey bee a dear and get me some juice', 'Wooden shoe like to hear another joke?', 'Oh never mind it’s pointless', 'No silly, a cow says Mooooo!', 'W!', 'Mikey doesn’t fit in the keyhole!', 'Bless you!'];

net.createServer((socket) => {
    var state = 0;
    socket.nombre = socket.remoteAddress + ':' + socket.remotePort;
    console.log(socket.nombre + ' se conectó');
    var chiste = Math.floor(Math.random() * x.length);
    socket.write('knock, knock\n');
    
    socket.on('data',(data)=>{
        if (state == 0 && String(data).trim().toLowerCase()=='who\'s there?') {
            state = 1;
            socket.write(x[chiste]+'\n');
        } else if (state == 1 && String(data).trim().toLowerCase()== x[chiste].toLowerCase() +' who?'){
            state = 2;
            socket.write(y[chiste]+'\n');
            socket.end();
        } else {
            state = 0;
            socket.write('knock, knock\n');
        }
    });
    
    socket.on('end',()=>{
        console.log(socket.nombre + ' se desconectó');
    });
    
}).listen(process.env.PORT);
console.log('Servidor TCP corriendo en el puerto ' + process.env.PORT);