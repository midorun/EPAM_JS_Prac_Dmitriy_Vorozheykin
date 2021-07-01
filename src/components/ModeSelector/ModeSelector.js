import React, { useRef } from 'react'
import './ModeSelector.scss'

const ModeSelector = ({ icon, placeholder, handleModeSelection, selectedMode }) => {

  const isActive = (selectedMode, placeholder) => {
    if (placeholder === selectedMode) {
      return 'active'
    }
  }

  const buttonClassName = `${'mode-selector__btn ' + isActive(selectedMode, placeholder)}`

  return (
    <li className="mode-selectors__mode-selector mode-selector" >
      <button className={buttonClassName} onClick={() => handleModeSelection(placeholder)}>
        {React.createElement(icon, { className: 'mode-selector__icon' })}
        <span className="mode-selector__text">
          {placeholder}
        </span>
      </button>
    </li>
  )
}

export default ModeSelector
