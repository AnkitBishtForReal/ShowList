import { Show } from "./componenets/models/Show";

export const SHOWS_FETCH = 'shows fetch';
export const SHOWS_FETCHED = "shows fetched";


export const showsFetchAction = () => ({
    type: SHOWS_FETCH
})

export const showsFetchedAction = (shows: Show[]) => ({
    type: SHOWS_FETCHED,
    payload: shows
})