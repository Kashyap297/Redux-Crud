const INITIAL_VALUE = {
    users: [
        { name: "Arvik", email: "Arvik@gmail.com" },
        { name: "Kashyap", email: "Kashyap@gmail.com" }
    ]
}

const crudReducer = (state = INITIAL_VALUE, action) => {
    if (action.type === "ADD_DATA") {
        return {
            ...state,
            users: [...state.users, action.payload]
        }
    } else if (action.type === "UPDATE_USER") {
        // var data = state.users.map((item, index) => index == action.payload.id ? action.payload : item)
        // return ({ ...state, users: data })
        var data = [...state.users]
        data[action.payload.id] = action.payload
        return { ...state, users: data }

    } else if (action.type === "DELETE_DATA") {
        return {
            ...state,
            users: state.users.filter((item, id) => action.id != id)
        }
    }
    else {
        return state
    }
}

export default crudReducer