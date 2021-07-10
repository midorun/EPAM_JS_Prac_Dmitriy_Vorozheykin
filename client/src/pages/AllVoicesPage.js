import React, { useState, useEffect } from 'react'
import './pages.scss'
const AllVoicesPage = () => {

  const [voices, setVoices] = useState()

  useEffect(() => {
    const interval = setInterval(() =>
      fetch('https://voicy-speaker.herokuapp.com/voices')
        .then(response => response.json())
        .then(response => setVoices(response.splice(response.length - 5, 5))), 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    voices ?
      <div className="pages__all-voices all-voices">
        {voices.map(({ timeStamp, audioBlob: [{ data }] }) => <Audio key={timeStamp} audioChunks={data} />)}
      </div> : null
  )
}

const Audio = ({ audioChunks }) => {

  const createAudioUrl = (audioChunks) => {
    const buff = new Int8Array(audioChunks).buffer
    const audioBlob = new Blob([buff], { type: 'audio/wav' })
    const audioUrl = URL.createObjectURL(audioBlob)
    return audioUrl
  }

  return (
    <div className="all-voices__item">
      <audio controls>
        <source src={createAudioUrl(audioChunks)} type="audio/wav" />
      </audio>
    </div>
  )
}

export default AllVoicesPage
