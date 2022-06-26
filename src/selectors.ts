import { State } from "./store";


export const showsSelector = (s: State) => s.shows[s.showsQuerry] || [];
export const showsQuerySelector = (s: State) => s.showsQuerry