import initialStatearr from "../constants/initialState";

const intialState = {
    name: "Redux Go",
    allName: []
}

function reducer(state = initialStatearr.arr, action) {
    console.log("REMOVE_DATA:", state)
    switch (action.type) {
        case 'REMOVE_DATA':
            const newList = state.data.filter((item) => (item.id % action.id) ? item.id : 0 )
            return {
                ...state,
                data: newList,
                dataLength: newList.length
            }
        default:
            return state;
    }

    // if (action.type === "ADD_NAME") {
    //     console.log("ADD_NAME:", state)
    //     return {
    //         allNames: state.allNames.concat(state.name),
    //         name: ""
    //     }
    // }

    // if (action.type === "CHANGE_NAME") {
    //     console.log("CHANGE_NAME:", action)
    //     return {
    //         ...state,
    //         name: action.name
    //     }
    // }
    // if (action.type === "DELETE_NAME") {
    //     const arr = state.allNames;
    //     arr.splice(arr.length - 1);
    //     console.log("DELETE_NAME:", state.allNames.pop()/* state.allNames[index-1] */)
    //     if (arr.length > 2) {
    //         return {
    //             ...state,
    //             allNames: arr.splice(arr.length - 1)
    //         }
    //     } else{
    //         return {
    //             ...state
    //         }

    //     }
    // }
    // return state
}

export default reducer;