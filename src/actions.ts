import Actor from "./componenets/models/Actor";
import { Show } from "./componenets/models/Show";

export const SHOWS_FETCH = 'shows fetch';
export const SHOWS_FETCHED = "shows fetched";




export const SHOW_FETCH = 'show fetch';
export const SHOW_FETCHED = "show fetched";


export const SHOW_CAST_FETCH = "show cast fetch";
export const SHOW_CAST_FETCHED = "show cast fetched";


export const showCastFetchAction = (showId:number) => ({

    type: SHOW_CAST_FETCH,
    payload:showId ,
});

export const showCastFetchedAction = (showId:number,actor:Actor[]) => ({

    type: SHOW_CAST_FETCHED,
    payload:{showId, actor} ,
})


export const showFetchAction = (id: number) => ({

    type: SHOW_FETCH,
    payload: id,
})
export const showFetchedAction = (show: Show) => ({
    type: SHOW_FETCHED,
    payload: show,
})




export const showsFetchAction = (querry: string) => ({
    type: SHOWS_FETCH,
    payload: querry
})

export const showsFetchedAction = (querry: string, shows: Show[]) => ({
    type: SHOWS_FETCHED,
    payload: { querry, shows }
})