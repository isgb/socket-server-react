
// Servidor de Express=
const express = require('express');
// Servidor de Sockets
const http = require('http');
// Configuracion del socket server
const socketio = require('socket.io');
const path = require('path');
const Socket = require('./sockets');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer(this.app);

        // Cnfiguracion de sockets
        this.io = socketio(this.server, { /* configuraciones */ });

    }

    middlewares() {
        // Desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        // CORS
        this.app.use(cors());
    }

    configurarSockets() {
        new Socket(this.io);
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar Sockets
        this.configurarSockets();

        // Inicializar SERVER
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto 8080', this.port);
        });

    }
}

module.exports = Server;