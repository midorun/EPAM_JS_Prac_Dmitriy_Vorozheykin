import {createServer} from 'http';
import {Socket, Server} from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors:{
    origin: "https://localhost:3000",
    methods: ["GET", "POST"]
  }
})


io.on('connection', (socket: Socket) => {
  console.log(socket.id);
  
})

httpServer.listen(5000)

