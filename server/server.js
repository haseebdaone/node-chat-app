const path = require('path');
var http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'you@email.com',
    text: 'hey its me again',
    createdAt: 1234
  });

  socket.on('createMessage', (message) => {
    console.log('new message', message);
  });

  socket.on('disconnect', () => {
    console.log('User has disconnected');
  });
});

server.listen(port, (req, res) => {
  console.log(`Server is up on ${port}`);
});
