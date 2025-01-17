class Socket{

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection', (socket) => { 
            // Escuchar el evento : mensaje-to-server
            socket.on('mensaje-to-server', (data) => {
                console.log(data);
    
                this.io.emit('mensaje-from-server', data);
            });

        }); 
    }
}

module.exports = Socket;