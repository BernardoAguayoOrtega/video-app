// import react and react dom
import React from 'react';
import ReactDom from 'react-dom';

//import provider
import { Provider } from 'react-redux';

//import store
import { createStore } from 'redux'

// import app
import App from './routes/App'

// import global styles
import './index.css'

// creat root const
const root = document.getElementById('app');

ReactDom.render(
  <App />
  , root);
