import React, { useEffect } from 'react'

const StreamPage = ({ socket }) => {
  useEffect(() => {
    socket.on('audioMessage', (audioChunks) => {
      const audioBlob = new Blob(audioChunks)
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      console.log(audioChunks);
      audio.play()
    })
    return () => socket.off('audioMessage')
  }, [socket])

  return (
    <div>
      Тут должна быть анимация аудио
    </div>
  )
}

export default StreamPage
