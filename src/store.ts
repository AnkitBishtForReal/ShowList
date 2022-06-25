import { AnyAction, createStore, applyMiddleware } from "redux";
import { SHOWS_FETCHED } from "./actions";
import sagaMiddleware, { rootSaga } from "./sagas";



export type State = {
    shows: show[];
};

const initialState: State = {
    shows: []
};

export const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SHOWS_FETCHED:
            return { ...state, shows: action.payload };
        default:
            return state;
    }
};
const store = createStore(reducer, applyMiddleware
    (sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;