import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { io } from 'socket.io-client';
import './index.scss';

const socket = io.connect('https://voicy-speaker.herokuapp.com')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App socket={socket} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

