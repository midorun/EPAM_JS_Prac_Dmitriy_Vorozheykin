
import './App.scss';
import ModeSelected from '../ModeSelected';
import ModeSelectors from '../ModeSelectors'
import { useState, useEffect } from 'react'
import { MODS } from '../../constants'
import { useHistory } from 'react-router-dom';

function App({ socket }) {

  const [mode, setMode] = useState(MODS.ALL_VOICES)
  const [usersCount, setUsersCount] = useState(0)
  const history = useHistory()

  const handleModeSelection = (value) => {
    setMode(value)
    history.push(value)
  }

  useEffect(() => {
    socket.on('user', (usersCount) => setUsersCount(usersCount))
    return () => socket.off('user')
  }, [socket])

  return (
    <div className="app">
      <div className="container">
        <ModeSelected modeSelected={mode} socket={socket} usersCount={usersCount} />
        <ModeSelectors selectedMode={mode} handleModeSelection={handleModeSelection} history={history} />
      </div>
    </div>
  );
}

export default App;
