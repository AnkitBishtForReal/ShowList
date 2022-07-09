
import { combineReducers, Reducer } from "redux";
import { createStore, applyMiddleware } from "redux";

import sagaMiddleware, { rootSaga } from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';
import { showReducer } from "./reducers/shows";





export const reducer = combineReducers({
    shows: showReducer
}
)
const store = createStore(reducer,
    composeWithDevTools(applyMiddleware
        (sagaMiddleware)));


export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga)

export default store;