import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import { MODS } from '../../constants'
import { Switch, Route, Redirect } from 'react-router-dom';
import MicrophonePage from '../../pages/MicrophonePage';
import './ModeSelected.scss'
import AllVoicesPage from '../../pages/AllVoicesPage';
import StreamPage from '../../pages/StreamPage';

const ModeSelected = ({ modeSelected }) => {

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socket = io.connect('https://voicy-speaker.herokuapp.com')
    setSocket(socket)
    return () => {
      socket.close()
    }
  }, [])

  return (
    <div className="app__mode-selected mode-selected">
      <span className="mode-selected__text">Active: {modeSelected}</span>
      <div className="pages">
        {socket ?
          (<Switch>
            <Route exact path={`/${MODS.ALL_VOICES}`} render={() => <AllVoicesPage />} />
            <Route path={`/${MODS.MICROPHONE}`} render={() => <MicrophonePage socket={socket} />} />
            <Route path={`/${MODS.STREAM}`} render={() => <StreamPage socket={socket} />} />
          </Switch>) :
          null}

        <Redirect to={`/${MODS.ALL_VOICES}`} />
      </div>

    </div>
  )
}

export default ModeSelected
