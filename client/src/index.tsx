import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import './index.css'
import {Provider} from 'react-redux';
import Store from './Redux/store'
import {
  BrowserRouter as Router,
} from "react-router-dom";


ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      </Provider>
    
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

