import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "./componenets/models/Show";
type ShowRowProps = {
querry:string;
    show: Show
}
const ShowRow: FC<ShowRowProps> = ({ show ,querry}) => {
    
                    
              
    console.log("show", { show })
    const navigate = useNavigate();
    const handleClick = () => navigate(`/shows/${show.id}?q=${querry}`);
    return <div onClick={handleClick} className="cursor-pointer flex items-stretch rounded-md p-2 bg-gray-700">

        <div className="w-20 shrink-0">
            <img src={show.image?.medium ||
                "https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"} />
        </div>
        <div className="ml-2">
            <h3>{show.name}</h3>
            <p>{show.summary}</p>
        </div>
    </div>


};

ShowRow.defaultProps = {

}

export default ShowRow;
