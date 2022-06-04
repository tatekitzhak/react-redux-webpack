import initialState from '../constants/initialState.js';

function counterReducer(state = initialState.num, action) {
    switch (action.type){

        case "INCREMENT":
         return { num : state.num+1 }

        case "DECREMENT":
          return {num: state.num-1}

         default:
           return state
    }
}
export default counterReducer;