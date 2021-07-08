import React from 'react'
import ModeSelector from '../../components/ModeSelector';
import './ModeSelectors.scss'
import { MODS } from '../../constants'

const ModeSelectors = ({ selectedMode, handleModeSelection, history }) => {

  return (
    <ul className="app__mode-selectors mode-selectors">
      <ModeSelector iconId={MODS.ALL_VOICES} placeholder={MODS.ALL_VOICES} handleModeSelection={handleModeSelection} selectedMode={selectedMode} history={history} />
      <ModeSelector iconId={MODS.MICROPHONE} placeholder={MODS.MICROPHONE} handleModeSelection={handleModeSelection} selectedMode={selectedMode} history={history} />
      <ModeSelector iconId={MODS.STREAM} placeholder={MODS.STREAM} handleModeSelection={handleModeSelection} selectedMode={selectedMode} history={history} />
    </ul>
  )
}

export default ModeSelectors
