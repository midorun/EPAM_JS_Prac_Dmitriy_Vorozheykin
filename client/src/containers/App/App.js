import { useState } from 'react'
import { useHistory } from 'react-router-dom';

import ModeSelected from '../ModeSelected';
import ModeSelectors from '../ModeSelectors'
import { MODS } from '../../constants'
import './App.scss';

const App = ({ socket }) => {

  const [mode, setMode] = useState(MODS.ALL_VOICES)
  const history = useHistory()

  const handleModeSelection = (value) => {
    setMode(value)
    history.push(value)
  }

  return (
    <div className="app">
      <div className="container">
        <ModeSelected modeSelected={mode} socket={socket} />
        <ModeSelectors selectedMode={mode} handleModeSelection={handleModeSelection} history={history} />
      </div>
    </div>
  );
}

export default App;
