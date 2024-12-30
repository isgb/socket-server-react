
// // Servidor de Express=
// const express = require('express');
// const app = express();

// // Servidor de Sockets
// const server = require('http').createServer(app);

// // Configuracion del socket server
// const io = require('socket.io')(server);

// // Desplegar el directorio publico
// app.use(express.static(__dirname + '/public'));

const Server = require('./models/server');
require('dotenv').config();
const server = new Server();

server.execute();


// io.on('connection', (socket) => { 

//     // console.log(socket.id);
//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });

//     // Escuchar el evento
//     socket.on('mensaje-to-server', (data) => {
//         console.log(data);

//         // socket.emit('mensaje-from-server', data);
//         io.emit('mensaje-from-server', data);
//     });
    
// });

// server.listen(8080, () => {
//     console.log('Servidor corriendo en puerto 8080');
// });
