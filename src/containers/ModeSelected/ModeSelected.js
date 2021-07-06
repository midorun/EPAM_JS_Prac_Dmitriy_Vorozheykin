import React from 'react'
import Icon from '../../components/Icon'
import { MODS } from '../../constants'
import './ModeSelected.scss'

const ModeSelected = ({ modeSelected }) => {
  return (
    <div className="app__mode-selected">
      Active: {modeSelected}

      <Icon xlinkHref='All voices' />
    </div>
  )
}

export default ModeSelected
