import React from 'react'

const Icon = ({ xlinkHref }) => {
  return (
    <svg>
      <use xlinkHref={xlinkHref} />
    </svg>
  )
}

export default Icon
