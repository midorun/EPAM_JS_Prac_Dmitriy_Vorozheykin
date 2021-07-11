import React, { useState, useEffect } from 'react'
import { ROOT } from '../../constants/index'
import Audio from './Audio'
import '../pages.scss'
const AllVoicesPage = () => {

  const [voices, setVoices] = useState()
  console.log(ROOT);
  console.log(ROOT + '/voices');
  useEffect(() => {
    const interval = setInterval(() =>
      fetch(ROOT + '/voices')
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

export default AllVoicesPage
