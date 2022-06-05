import { createStore, combineReducers} from 'redux';


import reducer from '../reducers/reducer.js';


// combining two (multiple) reducers into a single reducer
// const reducer = combineReducers({
//     counter: counterReducer,
//     name: namesReducer
// },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducer)
// console.log("index store:",store)
export const store = createStore(reducer);

export const app = {
    ERROR: 'letters-social/app/error',
    LOADED: 'letters-social/app/loaded',
    LOADING: 'letters-social/app/loading'
};

export function loading() {
    return {
      type: "types.app.LOADING"
    };
}  