import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../actions";
import { showsSelector } from "../selectors";
import ShowRow from "../ShowRow";
import { State } from "../store";
import { Show } from "./models/Show";
type ShowListProps = {
    shows: Show[],
    fetchshows: () => void
}
const ShowList: FC<ShowListProps> = ({ shows, fetchshows }) => {

    useEffect(() => {
        fetchshows();
    });

    return <div className="p-2 space-y-2">
        {shows.map((s) => (
            <ShowRow show={s} key={s.id} />
        ))}
    </div>
};

ShowList.defaultProps = {

};

const mapStateToProps = (s: State) => ({
    shows: showsSelector(s),
})

const mapdispatchtoProps = {
    fetchshows: showsFetchAction
}
export default connect(mapStateToProps, mapdispatchtoProps)(memo(ShowList));
