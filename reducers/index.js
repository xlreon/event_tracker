import { AppActions } from "../actions";
import { initialState } from "../store";

function checkDuplicate(events, event) {
    var found = false;
    events.map(e => {
        if (e.key === event.key) {
            found = true
        }
    });
    return found
}

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case AppActions.ADD_EVENT:
            return {...state, events: checkDuplicate(state.events, payload) ? [...state.events] : [...state.events, payload]}
        case AppActions.DELETE_EVENT:
            return state
        case AppActions.UPDATE_EVENT:
            return state
            default:
        return state;
    }
}

export default reducer;