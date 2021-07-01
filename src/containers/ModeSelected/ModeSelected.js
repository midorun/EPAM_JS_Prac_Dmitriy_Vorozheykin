import React from 'react'
import './ModeSelected.scss'

const ModeSelected = ({ modeSelected }) => {
  return (
    <div className="app__mode-selected">
      Active: {modeSelected}
    </div>
  )
}

export default ModeSelected
