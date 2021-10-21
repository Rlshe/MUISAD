const { log } = require('console');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var Names = []
var Ids = []

io.on('connection', function(socket){

  var userName = socket.handshake.query.name;
  var userId = socket.id

  console.log(userName);
  if (Names.includes(userName)){
    socket.emit('cancelConnection');
    //socket.disconnect();
    return;
  }

  socket.emit('ConectSuccesful');
  socket.broadcast.emit('conectedUser',socket.id, userName);
  for (var i = 0; i<Names.length; i++){
    socket.emit('prevConectedUser',Ids[i], Names[i]);
  }
  Names.push(userName);
  Ids.push(userId);
  console.log('a user connected: ' + userId);
  console.log('username: ' + userName);

  //socket.broadcast.emit('conectedUser',socket.id, userName);

  socket.on('disconnect', function(){
    console.log('user disconnected: ' + socket.id);
    socket.broadcast.emit('disconnected',socket.id);
    const isthis = (element) => element === socket.id;
    var pos = Ids.findIndex(isthis);
    Ids.splice(pos, 1)
    Names.splice(pos, 1)
  });
  socket.on('chat message', function(user, msg){
      console.log('message: ' + msg);
      socket.broadcast.emit('chat message', msg, user);
  });
  
  socket.on('private message', function(user, msg, to){
    const userf = (element) => element === to;
    var pos = Names.findIndex(userf);
    console.log(pos);
    if (pos === -1){
      
    } else {
      io.to(Ids[pos]).emit('private message', msg, user);
    }
  });

  socket.on('typing', function(isTyping){
    if (isTyping){
      console.log("typing");
      socket.broadcast.emit('typing',true);
    }else {
      console.log("stopped typing");
      socket.broadcast.emit('typing',false);
    }
  })

  socket.on('debug', function(text){
    console.log(text);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});