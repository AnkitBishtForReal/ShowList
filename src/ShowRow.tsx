import { FC } from "react";
import { Show } from "./componenets/models/Show";
type ShowRowProps = {

    show: Show
}
const ShowRow: FC<ShowRowProps> = ({ show }) => {
    return <div className="flex items-stretch rounded-md p-2 bg-gray-700">
        <img className="w-36" src={show.image?.medium ||
            "https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"} />
        <div className="ml-2">
            <h3>{show.name}</h3>
            <p>{show.summary}</p>
        </div>
    </div>


};

ShowRow.defaultProps = {

}

export default ShowRow;
