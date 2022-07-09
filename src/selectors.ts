
import { createSelector } from "reselect";
import { State } from "./store";



const showStateSelector = (s: State) => s.shows;



export const showQuerrySelector = createSelector(showStateSelector, (
    showState) => showState.querry);

const showsAgainstQuerrySelector = createSelector(showStateSelector, (showState) => showState.againstQuerry);

export const showsEntitiesSelector = createSelector(showStateSelector, (showState) => showState.entities);





export const showIdsSelector =
    createSelector(showQuerrySelector, showsAgainstQuerrySelector,
        (querry, againstQuerry) => againstQuerry[querry] || []);



export const showsSelector =
    createSelector(showIdsSelector, showsEntitiesSelector, (ids, entities) => ids.map((id) => entities[id]));