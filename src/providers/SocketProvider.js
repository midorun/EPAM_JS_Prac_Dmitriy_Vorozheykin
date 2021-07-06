import React, { useContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';


const SocketContext = React.createContext()

export const useSocket = () => {
  return useContext(SocketContext)
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState()
  const id = '1';

  // useEffect(() => {
  //   const newSocket = io('https://voicy-speaker.herokuapp.com')
  //   setSocket(newSocket)

  //   return () => {
  //     newSocket.close()
  //   }
  // }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}