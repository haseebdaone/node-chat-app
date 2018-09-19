var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'me@email.com',
    text: 'hey its me'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected to server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
