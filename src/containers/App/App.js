
import './App.scss';
import ModeSelected from '../ModeSelected';
import ModeSelectors from '../ModeSelectors'
import { useState } from 'react'
import { MODS } from '../../constants'

function App() {

  const [mode, setMode] = useState(MODS.ALL_VOICES)

  const handleModeSelection = (value) => {
    setMode(value)
  }

  return (
    <div className="app">
      <div className="container">
        <ModeSelected modeSelected={mode} />
        <ModeSelectors selectedMode={mode} handleModeSelection={handleModeSelection} />
      </div>
    </div>
  );
}

export default App;
