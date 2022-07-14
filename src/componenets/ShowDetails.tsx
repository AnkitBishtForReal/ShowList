import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Link, useSearchParams } from "react-router-dom";
import { showCastFetchAction, showFetchAction, showFetchedAction, showsFetchAction, showsFetchedAction } from "../actions";

import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { fetchShowCast } from "../sagas";
import { actorStateSelector, showActorSelector, showLoadingSelector, showsEntitiesSelector, showsSelector, showStateSelector } from "../selectors";
import { State } from "../store";
import { LinkWithQuery } from "./LinkWithQuery";
import Actor from "./models/Actor";
import { Show } from "./models/Show";
import Spinner from "./Spinner";


type ShowDetailsProps = {
    actorsLoading:boolean;
    show: Show;
    fetchShow: (id: number) => void;
    fetchShowCast:(id:number)=>void;
    loading:boolean
    actors:Actor[];
    prev?:string,
    next?:string,
    fetchShows:(querry:string)=>void;
} & WithRouterProps;
const ShowDetails: FC<ShowDetailsProps> = ({ params, show, fetchShow,loading,fetchShowCast ,actors,prev,next,fetchShows,search}) => {
    console.log("id", +params.id)
  
  
    useEffect(() => {
const showId = +params.id
const querry = search.get("q");
if(!show&&querry){
    
fetchShows(querry);

}
      
 fetchShow(showId);
 fetchShowCast(showId)
            
        }, [params.showId])


          
    useEffect(() => {
        const querry = search.get("q");
        if(!show&&querry){
            
        fetchShows(querry);
        
        }
              
    
                    
                }, [])

     
 


    


    console.log("show", show)

    return(
        <>
        {loading && <Spinner/>}
        {show &&( <div className="flex flex-col">

        <div className="w-20 shrink-0">
            <img src={show.image?.medium ||
                "https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"} />
        </div>
        <div className="ml-2">
            <h3>{show.name} {show.rating.average}/10</h3>
            <p>{show.summary}</p>
            <div>
                Actors:
            </div>

       {actors && (<div>
                {actors.map((a)=><div className="flex justify-center "><div><h2>{a.name}</h2></div>
                {/* <div><img src={a.image.medium}/></div> */}
                </div>)}
            </div>)}
            <div className="flex justify-around" >
        {prev?<Link to={prev}>Prev</Link>:<span></span>}
        {next?<Link to={next}>Next</Link>:<span></span>}
     
        
        </div>
        </div>
    


    </div>)}
    </>)
};

ShowDetails.defaultProps = {

}

const mapStateToProps = (s: State, props: any) => {
    const showId =+props.params.id

    const shows =showsSelector (s);
    let prevShow,nextShow;

for( let i=0; i<shows.length; i++){
const show = shows[i];
if(show.id===showId){
    if(i+1<shows.length){
nextShow=shows[i+1]
    }

if(i>=1){
    prevShow=shows[i-1]
}
break;
}

}


    
    return{
    show: showsEntitiesSelector(s)[showId],
loading:showLoadingSelector(s)[showId],
actors:showActorSelector(s)[showId],
prev:prevShow&&`/shows/${prevShow.id}`,
next:nextShow&&`/shows/${nextShow.id}`

}};

const mapDispatchToProps = {
    fetchShow: showFetchAction,
    fetchShowCast:showCastFetchAction,
    fetchShows:showsFetchAction
   
   
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetails)));
