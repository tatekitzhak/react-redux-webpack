import initialState from "../constants/initialState";

const intialState = {
    name: "Redux Go",
    allName: []
}

function reducer(state = { allNames: [], name: "Redux Go" }, action) {

    if (action.type === "ADD_NAME") {
        console.log("ADD_NAME:", state)
        return {
            allNames: state.allNames.concat(state.name),
            name: ""
        }
    }

    if (action.type === "CHANGE_NAME") {
        console.log("CHANGE_NAME:", action)
        return {
            ...state,
            name: action.name
        }
    }
    if (action.type === "DELETE_NAME") {
        const arr = state.allNames;
        arr.splice(arr.length - 1);
        console.log("DELETE_NAME:", state.allNames.pop()/* state.allNames[index-1] */)
        if (arr.length > 2) {
            return {
                ...state,
                allNames: arr.splice(arr.length - 1)
            }
        } else{
            return {
                ...state
            }

        }
    }
    return state
}

export default reducer;