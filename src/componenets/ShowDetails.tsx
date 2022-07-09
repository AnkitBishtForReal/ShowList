import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showFetchAction } from "../actions";

import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { showsEntitiesSelector } from "../selectors";
import { State } from "../store";
import { Show } from "./models/Show";
type ShowDetailsProps = {
    show: Show;
    fetchShow: (id: number) => void;
} & WithRouterProps;
const ShowDetails: FC<ShowDetailsProps> = ({ params, show, fetchShow }) => {
    console.log("id", +params.id)
    useEffect(() => {

        fetchShow(+params.id);

    }, [])

    console.log("show", show)


    if (!show) {
        fetchShow(+params.id);
    }


    return <div className="flex flex-col">

        <div className="w-20 shrink-0">
            <img src={show.image?.medium ||
                "https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"} />
        </div>
        <div className="ml-2">
            <h3>{show.name} {show.rating.average}/10</h3>
            <p>{show.summary}</p>
        </div>


    </div>
};

ShowDetails.defaultProps = {

}

const mapStateToProps = (s: State, props: any) => ({
    show: showsEntitiesSelector(s)[+ props.params.id],

});

const mapDispatchToProps = {
    fetchShow: showFetchAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetails)));
