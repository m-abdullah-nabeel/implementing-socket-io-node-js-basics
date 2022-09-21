const express = require("express");
const app = express()
const http = require("http")
const server = http.createServer(app)
// try to change next 2 lines
const { Server } = require("socket.io");
const io = new Server(server);

app.listen(3001, ()=>{console.log("running")})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
    
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      console.log('message: ' + msg + " sent by " + socket.id);
    });
});
  
server.listen(3000, () => {
    console.log('listening on *:3000');
});
  