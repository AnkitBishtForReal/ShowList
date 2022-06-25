import axios from "axios"
import { Show } from "./componenets/models/Show";
type ShowObj = {
    show: Show
}
export const getshows = async () => {
    const response = await axios.get<ShowObj[]>("https://api.tvmaze.com/search/shows?q=girl")
    return response.data.map((d: any) => d.show);
};