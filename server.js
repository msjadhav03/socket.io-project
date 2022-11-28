const express = require('express')
const http = require('http')

const app = express()
const port = 2000
const server = http.createServer(app)

app.use(express.static("public"))

app.get("/", (Req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.emit('hello-client')

    socket.on('hello-server', () => {
        console.log('hello server')
    })
})

server.listen(port, () => {
    console.info(`Server is listening on ${port}`);
})