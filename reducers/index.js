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
            if(payload && payload.eventType) {
                let firstIndex, secondIndex = null
                switch(payload.eventType) {
                    case "UP":
                        firstIndex = (payload.index !== 0 ? payload.index-1:0)
                        secondIndex = payload.index
                    return {
                            ...state,
                            events: [...state.events.map(function(element, index) {
                                if (index === firstIndex) return state.events[secondIndex];
                                else if (index === secondIndex) return state.events[firstIndex];
                                else return element;
                                })]
                            }
                    case "DOWN":
                        firstIndex = payload.index
                        secondIndex = (payload.index !== state.events.length-1 ? payload.index+1:payload.index)
                        return {
                            ...state,
                            events: [...state.events.map(function(element, index) {
                                if (index === firstIndex) return state.events[secondIndex];
                                else if (index === secondIndex) return state.events[firstIndex];
                                else return element;
                                })]}
                    case 'DELETE':
                        return {
                            ...state,
                            events: [...state.events.filter((ele,ind) => ind !== payload.index)],
                        }
                    default:
                        return state
                }
            }
            default:
        return state;
    }
}

export default reducer;