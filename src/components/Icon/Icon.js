import React from 'react'
import icons from '../../assets/icons/icons.svg';

const Icon = ({ xlinkHref }) => {
  return (
    <svg>
      <use xlinkHref={`${icons}#${xlinkHref}`} />
    </svg>
  )
}

export default Icon
