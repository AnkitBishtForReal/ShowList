import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../actions";
import { showQuerrySelector, showsLoadingSelector, showsSelector } from "../selectors";
import ShowRow from "../ShowRow";
import { State } from "../store";
import { Show } from "./models/Show";
import Spinner from "./Spinner";
type ShowListProps = {
    showsLoading:boolean;
    querry: string;
    shows: Show[];
    fetchshows: (querry: string) => void;

}
const ShowList: FC<ShowListProps> = ({ shows, fetchshows, querry,showsLoading }) => {

    console.log("shows", shows)
    console.log("querry", querry)


    return <div className="p-5">
        

        <div className=" justify-center  flex h-9">
       

        </div>
        <input className="rounded-md border border-red-400" value={querry} onChange={(event) => {
            fetchshows(event.target.value);
        }} placeholder="search" />

     {showsLoading && <Spinner/>}   
     
     {shows && (   <div className="space-y-3 mt-2" >
           
            {shows.map((s) => (
                <ShowRow querry={querry} show={s} key={s.id} />
               

            ))}
            
        </div>)}
    </div>
};

ShowList.defaultProps = {

};

const mapStateToProps = (s: State) => ({
    shows: showsSelector(s),
    querry: showQuerrySelector(s),
    showsLoading:showsLoadingSelector(s)

})

const mapdispatchtoProps = {
    fetchshows: showsFetchAction
}
export default connect(mapStateToProps, mapdispatchtoProps)(memo(ShowList));
