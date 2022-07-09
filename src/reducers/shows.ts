import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED, SHOW_FETCH, SHOW_FETCHED } from "../actions";
import { Show } from "../componenets/models/Show";

export type ShowState = {
    entities: { [id: number]: Show };
    againstQuerry: { [q: string]: number[] };
    querry: string;
}


export const initialShowState: ShowState = {
    entities: {},
    againstQuerry: {},
    querry: ''
};

export const showReducer: Reducer<ShowState> = (state = initialShowState, action) => {
    switch (action.type) {

        case SHOW_FETCHED:
            console.log("action.payload,", action)
            const show: Show = action.payload;
            console.log("show fetched", show)
            return {
                ...state,
                entities: { ...state.entities, [show.id]: show },
            }
        case SHOWS_FETCH:
            return { ...state, querry: action.payload };

        case SHOWS_FETCHED:

            const { querry, shows } = action.payload as { querry: string, shows: Show[] }
            const showEntity = new schema.Entity("shows");
            const normalized = normalize(shows, [showEntity]);
            const normalizedShows = normalized.entities.shows;

            console.log("normalisedShows", normalizedShows)
            const ids = shows.map((s) => s.id);

            return { ...state, entities: { ...state.entities, ...normalizedShows }, againstQuerry: { ...state.againstQuerry, [querry]: ids } };


        default:

            return state;
    }

}