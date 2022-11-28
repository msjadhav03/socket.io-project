const socket = io('/');

socket.on("connect", () => {
    console.log('Successfully conneected ' + socket.id)
});

socket.on('hello-client', () => {
    console.log('hello client')

    socket.emit('hello-server')
})

