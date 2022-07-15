
import { createSelector } from "reselect";
import Actor from "./componenets/models/Actor";
import { State } from "./store";



 export const showStateSelector = (s: State) => s.shows;

export const actorStateSelector = (s:State)=>s.actors

export const showQuerrySelector = createSelector(showStateSelector, (
    showState) => showState.querry);

const showsAgainstQuerrySelector = createSelector(showStateSelector, (showState) => showState.againstQuerry);

export const showsEntitiesSelector = createSelector(showStateSelector, (showState) => showState.entities);





export const showIdsSelector =
    createSelector(showQuerrySelector, showsAgainstQuerrySelector,
        (querry, againstQuerry) => againstQuerry[querry] || []);



export const showsSelector =
    createSelector(showIdsSelector, showsEntitiesSelector, (ids, entities) => ids.map((id) => entities[id]));

    export const showLoadingSelector = createSelector(showStateSelector,(showState)=>showState.showLoading);
    export const actorLoadingSelector = createSelector(showStateSelector,(showsState)=>showsState.actorsLoading);
    export const showsLoadingSelector = createSelector(showStateSelector,(showsState)=>showsState.showsLoading)
    export const actorEntitiesSelector = createSelector(actorStateSelector,
        (actorState)=>actorState.entities)


export const showActorIdsSelector = createSelector(
    showStateSelector,
    (showState)=>showState.actors
);

export const showActorSelector = createSelector(showActorIdsSelector,actorEntitiesSelector,
    (showActorsIds,ActorEntities)=>{
const data= Object.keys(showActorsIds).reduce((showActors,showId)=>{
            const actorIds =showActorsIds[+showId];
      const actors=      actorIds.map ((id)=>ActorEntities[id])
            return {...showActors,[showId]:actors}
        },{});
        return data as {[id:number]:Actor[];}
    })