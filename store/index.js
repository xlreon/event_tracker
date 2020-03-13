import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {
    events: []
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };