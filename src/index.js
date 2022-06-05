import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers} from 'redux';
import { Provider} from 'react-redux';



import {store} from './redux/stores/store.js';
import App1 from './apps/app1.js';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App1 rooProps="App home" />
    </Provider>
);


