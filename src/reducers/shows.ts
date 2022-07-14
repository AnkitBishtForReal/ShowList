import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED, SHOW_CAST_FETCHED, SHOW_FETCH, SHOW_FETCHED } from "../actions";
import Actor from "../componenets/models/Actor";
import { Show } from "../componenets/models/Show";

export type ShowState = {
    entities: { [id: number]: Show };
    againstQuerry: { [q: string]: number[] };
    querry: string;
    showLoading:{[showId:number]:boolean};
    actorsLoading:{[showId:number]:boolean}
  actors:{[showId:number]:number[];}
}


export const initialShowState: ShowState = {
    entities: {},
    againstQuerry: {},
    querry: '',
    showLoading:{},
    actorsLoading:{},
    actors:{},
    

};

export const showReducer: Reducer<ShowState> = (state = initialShowState, action) => {
    switch (action.type) {


        case SHOW_FETCH:
          
            return {
                ...state,
                showLoading:{[action.payload]:true}
            }

        case SHOW_FETCHED:
            console.log("action.payload,", action)
            const show: Show = action.payload;
            console.log("show fetched", show)
            return {
                ...state,
                entities: { ...state.entities, [show.id]: show },
                showLoading:{[show.id]:false}
            }
        case SHOWS_FETCH:
            console.log("ghsdhgh",action.payload)
            return { ...state, querry: action.payload };

        case SHOWS_FETCHED:

            const { querry, shows } = action.payload as { querry: string, shows: Show[] }
            const showEntity = new schema.Entity("shows");
            const normalized = normalize(shows, [showEntity]);
            const normalizedShows = normalized.entities.shows;

            console.log("normalisedShows", normalizedShows)
            const ids = shows.map((s) => s.id);
            

            return { ...state, entities: { ...state.entities, ...normalizedShows }, againstQuerry: { ...state.againstQuerry,[querry]: ids } };

case SHOW_CAST_FETCHED:
    const {showId,actor}=action.payload as{
        showId:number;
    actor:Actor[]}
    const  actorIds = actor.map((a)=>a.id);
    console.log("actorIds",actorIds)
    return{
        ...state,
        actors:{...state.actors,[showId]:actorIds}
    }


        default:

            return state;
    }

}