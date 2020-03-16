const AppActions = {
    ADD_EVENT: "ADD_EVENT",
    DELETE_EVENT: "DELETE_EVENT",
    UPDATE_EVENT: "UPDATE_EVENT"
};

const addEvent = event => dispatch => dispatch({type: AppActions.ADD_EVENT, payload: event})

const deleteEvent = index => dispatch => dispatch({type: AppActions.DELETE_EVENT, payload: index})

const updateEvent = (eventType, index) => dispatch => dispatch({type: AppActions.UPDATE_EVENT, payload: {eventType, index}})

export { AppActions, addEvent, deleteEvent, updateEvent };