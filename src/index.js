import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers} from 'redux';
import { Provider} from 'react-redux';
import counterReducer from './store/reducers/counterReducer.js';
import namesReducer from './store/reducers/namesReducer.js';
import App from './app.js';

// combining two (multiple) reducers into a single reducer
const reducer = combineReducers({
    counter: counterReducer,
    name: namesReducer
});
const store = createStore(reducer)
console.log("index store:",store)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);


