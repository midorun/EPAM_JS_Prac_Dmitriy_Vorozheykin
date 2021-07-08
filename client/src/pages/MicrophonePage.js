import React from 'react'
import Icon from '../components/Icon';
import { RECORD } from '../constants';

const MicrophonePage = ({ socket }) => {

  const [isRecording, setIsRecording] = React.useState(false)

  return (
    <div className="mode-selected__icon">
      {isRecording ?
        <Icon xlinkHref={RECORD.STOP} className={RECORD.STOP} onClick={() => setIsRecording(false)} /> :
        <Icon xlinkHref={RECORD.START} className={RECORD.START} onClick={() => setIsRecording(true)} />}
    </div>
  )
}

export default MicrophonePage
