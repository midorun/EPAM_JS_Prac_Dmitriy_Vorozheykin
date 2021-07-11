// const app = require("express")();
// const cors = require('cors');
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// //some libs

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/voices', function (req, res) {
  res.send(JSON.stringify(DATA.audioMessages))
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const DATA = {
  users: [],
  audioMessages: []
}

const sendUsersCountToAllUsers = (users) => users.forEach(userSocket => userSocket.emit('user', users.length))
const sendAudioMessageToAllUsers = (users, audioMessage) => users.forEach(userSocket => userSocket.emit('audioMessage', audioMessage))

io.on('connection', (socket) => {
  DATA.users.push(socket)
  sendUsersCountToAllUsers(DATA.users)

  socket.on('disconnect', () => {
    DATA.users = DATA.users.slice(0, DATA.users.length - 1)
    sendUsersCountToAllUsers(DATA.users)
  })

  socket.on('audioMessage', (audioChunks) => {
    DATA.audioMessages.push({
      'timeStamp': new Date().toString(),
      'audioBlob': audioChunks
    });
    sendAudioMessageToAllUsers(DATA.users, audioChunks);
    console.log(DATA.audioMessages.length);
  });

})

server.listen(9000);