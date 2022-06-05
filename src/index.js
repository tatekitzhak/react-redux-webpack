import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers} from 'redux';
import { Provider} from 'react-redux';

import counterReducer from './store/reducers/counterReducer.js';
import namesReducer from './store/reducers/namesReducer.js';
import reducer from './store/reducers/reducer.js';

import App from './app.js';

// combining two (multiple) reducers into a single reducer
// const reducer = combineReducers({
//     counter: counterReducer,
//     name: namesReducer
// },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducer)
// console.log("index store:",store)
const store = createStore(reducer);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App index="home" />
    </Provider>
);


