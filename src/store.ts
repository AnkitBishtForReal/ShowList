import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { AnyAction, createStore, applyMiddleware } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { Show } from "./componenets/models/Show";
import sagaMiddleware, { rootSaga } from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';



export type State = {
    shows: { [id: number]: Show };
    showsAgainstQuerry: { [q: string]: number[] };
    showsQuerry: string;
};

const initialState: State = {
    shows: {},
    showsAgainstQuerry: {},
    showsQuerry: ''
};

export const reducer: Reducer<State> = (state = initialState, action: AnyAction) => {
    console.log("state", state)
    switch (action.type) {
        case SHOWS_FETCH:
            return { ...state, showsQuerry: action.payload };

        case SHOWS_FETCHED:

            const { querry, shows } = action.payload as { querry: string, shows: Show[] }
            const showEntity = new schema.Entity("shows");
            const normalized = normalize(shows, [showEntity]);
            const normalizedShows = normalized.entities.shows;

            console.log("normalisedShows", normalizedShows)
            const ids = shows.map((s) => s.id);

            return { ...state, shows: { ...state.shows, ...normalizedShows }, showsAgainstQuerry: { ...state.showsAgainstQuerry, [querry]: ids } };


        default:

            return state;

    }

};
const store = createStore(reducer,
    composeWithDevTools(applyMiddleware
        (sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;