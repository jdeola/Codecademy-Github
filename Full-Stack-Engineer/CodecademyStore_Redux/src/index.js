import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
// Import the store here.
import {store} from './app/store';
// Pass state and dispatch props to the <App /> component.
const render = (state, dispatch) => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.
store.subscribe(render);