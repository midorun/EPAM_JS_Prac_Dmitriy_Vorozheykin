import React, { useState } from 'react'
import ModeSelector from '../../components/ModeSelector';
import { ReactComponent as speakerIcon } from '../../assets/icons/speaker.svg'
import { ReactComponent as microphoneIcon } from '../../assets/icons/microphone.svg'
import { ReactComponent as menuIcon } from '../../assets/icons/menu.svg'
import './ModeSelectors.scss'
import { MODS } from '../../constants'

const ModeSelectors = ({ selectedMode, handleModeSelection }) => {

  return (
    <ul className="app__mode-selectors mode-selectors">
      <ModeSelector icon={menuIcon} placeholder={MODS.ALL_VOICES} handleModeSelection={handleModeSelection} selectedMode={selectedMode} />
      <ModeSelector icon={microphoneIcon} placeholder={MODS.MICROPHONE} handleModeSelection={handleModeSelection} selectedMode={selectedMode} />
      <ModeSelector icon={speakerIcon} placeholder={MODS.STREAM} handleModeSelection={handleModeSelection} selectedMode={selectedMode} />
    </ul>
  )
}

export default ModeSelectors
