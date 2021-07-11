import React from 'react'

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

export default Audio
