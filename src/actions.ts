import { Show } from "./componenets/models/Show";

export const SHOWS_FETCH = 'shows fetch';
export const SHOWS_FETCHED = "shows fetched";


export const showsFetchAction = (querry: string) => ({
    type: SHOWS_FETCH,
    payload: querry
})

export const showsFetchedAction = (querry: string, shows: Show[]) => ({
    type: SHOWS_FETCHED,
    payload: { querry, shows }
})