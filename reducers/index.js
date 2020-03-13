import { AppActions } from "../actions";
import { initialState } from "../store";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log("<>", payload)
    switch (type) {
        case AppActions.ADD_EVENT:
            return {...state, events: [...state.events, payload]}
        case AppActions.DELETE_EVENT:
            return state
        case AppActions.UPDATE_EVENT:
            return state
            default:
        return state;
    }
}

export default reducer;