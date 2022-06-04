import initialState from '../constants/initialState.js';

const namesReducer = (state = initialState.allNames , action) => {
    switch (action.type) {

        case "ALLNAMES":
            return { allNames: state.allNames.concat(action.name) }

        default:
            return state
    }

}

export default namesReducer