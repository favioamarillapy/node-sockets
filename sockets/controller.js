const socketController = (socket) => {

    socket.on('disconnect', () => {
        console.log('Client disconected', socket.id);
    });

    socket.on('send-message', (payload, callback) => {
        console.log('payload', payload);
        const id = 123456789;
        callback(id);

        socket.broadcast.emit('send-message', payload);
    });

}



module.exports = {
    socketController
}

