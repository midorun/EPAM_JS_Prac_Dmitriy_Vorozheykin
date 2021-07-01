import React, { useState } from 'react'
import ModeSelector from '../../components/ModeSelector';
import { ReactComponent as speakerIcon } from '../../assets/icons/speaker.svg'
import { ReactComponent as microphoneIcon } from '../../assets/icons/microphone.svg'
import { ReactComponent as menuIcon } from '../../assets/icons/menu.svg'
import './ModeSelectors.scss'


const ModeSelectors = ({ selectedMode, handleModeSelection }) => {

  const checkActiveModeSelector = (selectedMode, placeholder) => {
    if (placeholder === selectedMode) {
      return 'active'
    }
  }



  return (
    <ul className="app__mode-selectors mode-selectors">
      <ModeSelector icon={menuIcon} placeholder='All voices' handleModeSelection={handleModeSelection} />
      <ModeSelector icon={microphoneIcon} placeholder='Microphone' handleModeSelection={handleModeSelection} />
      <ModeSelector icon={speakerIcon} placeholder='Stream' handleModeSelection={handleModeSelection} />
    </ul>
  )
}

export default ModeSelectors
