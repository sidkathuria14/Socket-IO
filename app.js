// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//     io.emit('chat message', msg);
//   });
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
// // io.on('connection', function(socket){
// //     socket.on('chat message', function(msg){
// //       io.emit('chat message', msg);
// //     });
// //   });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;
var port = 8000;
app.get('/', function(req, res){
  res.sendFile('/home/sidkathuria14/Desktop/ChatApp'+ '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
    
