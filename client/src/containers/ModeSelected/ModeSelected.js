import React from 'react'
import { MODS } from '../../constants'
import { Switch, Route, Redirect } from 'react-router-dom';
import MicrophonePage from '../../pages/MicrophonePage';
import './ModeSelected.scss'
import AllVoicesPage from '../../pages/AllVoicesPage/AllVoicesPage';
import StreamPage from '../../pages/StreamPage';
import UsersCount from '../UsersCount'

const ModeSelected = ({ modeSelected, socket, usersCount }) => {

  return (
    <div className="app__mode-selected mode-selected">
      <UsersCount socket={socket} />
      <span className="mode-selected__text">Active: {modeSelected}</span>
      <div className="pages">
        <Switch>
          <Route exact path={`/${MODS.ALL_VOICES}`} render={() => <AllVoicesPage />} />
          <Route path={`/${MODS.MICROPHONE}`} render={() => <MicrophonePage socket={socket} />} />
          <Route path={`/${MODS.STREAM}`} render={() => <StreamPage socket={socket} />} />
        </Switch>
        <Redirect to={`/${MODS.ALL_VOICES}`} />
      </div>
    </div>
  )
}

export default ModeSelected
