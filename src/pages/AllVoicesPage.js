import React, { useState, useEffect } from 'react'

const AllVoicesPage = () => {

  const [voices, setVoices] = useState()

  const getVoices = async (params) => {
    const response = await fetch('https://voicy-speaker.herokuapp.com/voices')

    if (response.ok) {
      return await response.json()
    }

    throw new Error("Could not fetch data")
  }


  useEffect(() => {
    setVoices(getVoices().then(data => data))

  }, [])

  return (
    <div className="vouces">

    </div>
  )
}

export default AllVoicesPage
