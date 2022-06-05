import initialState from "../constants/initialState";

const intialState = {
    name: "Redux Go",
    allName: []
}

function reducer(state = { allNames: [] }, action) {
    
    if (action.type === "ADD_NAME") {
        console.log("ADDNAME:",state)
        return {
            allNames: state.allNames.concat(state.name),
            name: ""
        }
    }

    if (action.type === "CHANGE_NAME") {
        console.log("CHANGE_NAME:",action)
        return {
            ...state,
            name: action.name
        }
    }

    return state
}

export default reducer;