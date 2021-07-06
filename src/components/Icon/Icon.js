import React from 'react'
import icons from '../../assets/icons/icons.svg';

const Icon = ({ xlinkHref, className, onClick }) => {
  return (
    <svg className={className} onClick={onClick}>
      <use xlinkHref={`${icons}#${xlinkHref}`} />
    </svg>
  )
}

export default Icon
