import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { io } from 'socket.io-client';

import App from './containers/App/App';
import { ROOT } from './constants';
import './index.scss';

const socket = io.connect(ROOT)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App socket={socket} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

