
import './App.scss';
import ModeSelected from '../ModeSelected';
import ModeSelectors from '../ModeSelectors'
import { useState } from 'react'
import { MODS } from '../../constants'
import { SocketProvider } from '../../providers/SocketProvider';
import { useHistory } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState(MODS.ALL_VOICES)
  const history = useHistory()

  console.log(history);

  const handleModeSelection = (value) => {
    setMode(value)
    history.push(value)
  }

  return (
    <div className="app">
      <div className="container">
        <SocketProvider>
          <ModeSelected modeSelected={mode} />
          <ModeSelectors selectedMode={mode} handleModeSelection={handleModeSelection} history={history} />
        </SocketProvider>
      </div>
    </div>
  );
}

export default App;
