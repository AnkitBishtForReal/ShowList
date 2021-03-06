import axios from "axios"
import Actor from "./componenets/models/Actor";
import { Show } from "./componenets/models/Show";
type ShowObj = {
    show: Show
}
export const getshows = async (querry: string) => {
    const response = await axios.get<ShowObj[]>("https://api.tvmaze.com/search/shows?q=" + querry)

    return response.data.map((d: any) => d.show);
};

export const getshow = async (id: number) => {


    const response = await axios.get<Show>("https://api.tvmaze.com/shows/" + id)
    console.log("response.data", response.data)
    return response.data;
}

export const getshowCast = async (id: number) => {


    const response = await axios.get<{person:Actor}[]>("https://api.tvmaze.com/shows/" + id + "/cast" ) 
    console.log("response.data", response.data)
    return response.data;
}



