import React, { useRef } from 'react'
import './ModeSelector.scss'

const ModeSelector = ({ icon, placeholder, handleModeSelection }) => {

  return (
    <li className="mode-selectors__mode-selector mode-selector" >
      <button className="mode-selector__btn" onClick={() => handleModeSelection(placeholder)}>
        {React.createElement(icon, { className: 'mode-selector__icon' })}
        <span className="mode-selector__text">
          {placeholder}
        </span>
      </button>
    </li>
  )
}

export default ModeSelector
