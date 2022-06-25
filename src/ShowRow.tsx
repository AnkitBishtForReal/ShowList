import { FC } from "react";
import { Show } from "./componenets/models/Show";
type ShowRowProps = {

    show: Show
}
const ShowRow: FC<ShowRowProps> = ({ show }) => {
    return <div className="flex items-stretch rounded-md p-2 bg-gray-700">
        <img src={show.image?.medium} />
        <div>
            <h3>{show.name}</h3>
            <p>{show.summary}</p>
        </div>
    </div>


};

ShowRow.defaultProps = {

}

export default ShowRow;
