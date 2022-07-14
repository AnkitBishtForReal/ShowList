import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCHED } from "../actions";
import { Actor } from "../componenets/models/Actor";


type ActorState = {
    entities:{[id:number]:Actor}
}

const initialActorState = {
    entities:{}
};
export const actorReducer: Reducer<ActorState> = (state = initialActorState, action) => {

switch (action.type) {

case SHOW_CAST_FETCHED:
   
    const {actor,showId} = action.payload 
   
    console.log("action payload",actor)
    const actorEntity = new schema.Entity("actors");
    const normalized = normalize(actor, [actorEntity]);
    const normalizedActors
     = normalized.entities.actors;

    console.log("normalisedActors", normalizedActors)
    
    console.log("actiorState,",state)
    return{
        ...state,
        entities:{...state.entities, ...normalizedActors}
    }
   

default:

            return state;
        }
    };



