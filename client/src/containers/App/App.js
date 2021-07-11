import './App.scss';
import ModeSelected from '../ModeSelected';
import ModeSelectors from '../ModeSelectors'
import { useState } from 'react'
import { MODS } from '../../constants'
import { useHistory } from 'react-router-dom';

function App({ socket }) {

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
