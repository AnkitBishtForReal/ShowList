import { Reducer } from "react";
import { AnyAction, createStore, applyMiddleware } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { Show } from "./componenets/models/Show";
import sagaMiddleware, { rootSaga } from "./sagas";



export type State = {
    shows: { [q: string]: Show[] };
    showsQuerry: string;
};

const initialState: State = {
    shows: {},
    showsQuerry: ''
};

export const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SHOWS_FETCH:
            return { ...state, showsQuerry: action.payload };

        case SHOWS_FETCHED:
            const { querry, shows } = action.payload
            return { ...state, shows: { ...state.shows, [querry]: shows } };
        default:
            return state;
    }
};
const store = createStore(reducer, applyMiddleware
    (sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;