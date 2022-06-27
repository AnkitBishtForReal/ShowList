import { State } from "./store";


export const showsSelector = (s: State) => {
    console.log("state", s)
    const showsIds = s.showsAgainstQuerry[s.showsQuerry] || [];
    const shows2 = showsIds.map((id) => s.shows[id]);
    console.log("shows 2", showsIds)
    return shows2
}
export const showsQuerySelector = (s: State) => {

    const show = s.showsQuerry
    console.log("showsQuery", show)
    return show
}