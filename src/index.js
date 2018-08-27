import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from "./redux/reducers.js"
import { createStore } from "redux"
import { Provider } from "react-redux"

const pantsStoreThatHasFancyThings = createStore(reducer)


// pass store to provider
// provider wrapped around App

ReactDOM.render(
  <Provider store={pantsStoreThatHasFancyThings}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
