import React, { useEffect, useState } from 'react'
import Icon from '../components/Icon';
import { RECORD } from '../constants';

const MicrophonePage = ({ socket }) => {

  const [isRecording, setIsRecording] = React.useState(false)
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    const recordAudio = () => {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream);
          setMediaRecorder(mediaRecorder);

          mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
          });
          mediaRecorder.addEventListener("stop", () => {
            socket.emit('audioMessage', audioChunks);
            setAudioChunks([]);
          });
        });
    }

    recordAudio();
  }, [audioChunks, socket])

  const handleStartClick = () => {
    setIsRecording(true)
    mediaRecorder.start();
    socket.emit('recordStarted');
  }

  const handleStopClick = () => {
    setIsRecording(false)
    mediaRecorder.stop()
  }

  return (
    <div className="pages__microphone">
      <div className="mode-selected__icon">
        {isRecording ?
          <Icon xlinkHref={RECORD.STOP} className={RECORD.STOP} onClick={handleStopClick} /> :
          <Icon xlinkHref={RECORD.START} className={RECORD.START} onClick={handleStartClick} />}
      </div>
    </div>
  )
}

export default MicrophonePage
