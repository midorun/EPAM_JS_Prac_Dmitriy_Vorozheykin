import React, { useState } from 'react'
import Icon from '../../components/Icon'
import { MODS, RECORD } from '../../constants'
import { Switch, Route } from 'react-router-dom';
import MicrophonePage from '../../pages/MicrophonePage';
import './ModeSelected.scss'
import AllVoicesPage from '../../pages/AllVoicesPage';
import StreamPage from '../../pages/StreamPage';

const ModeSelected = ({ modeSelected }) => {



  return (
    <div className="app__mode-selected mode-selected">
      <span className="mode-selected__text">Active: {modeSelected}</span>
      <Switch>
        <Route path={`/${MODS.ALL_VOICES}`} render={() => <AllVoicesPage />} />
        <Route path={`/${MODS.MICROPHONE}`} render={() => <MicrophonePage />} />
        <Route path={`/${MODS.STREAM}`} render={() => <StreamPage />} />
      </Switch>

    </div>
  )
}

export default ModeSelected
