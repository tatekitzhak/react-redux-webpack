import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers} from 'redux';
import { Provider} from 'react-redux';
import App from './app.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App rooProps="App home" />);
