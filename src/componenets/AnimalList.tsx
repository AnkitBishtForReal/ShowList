import { FC } from "react";
type AnimalListProps = {
    animals: [],
    fetchanimals: () => void

}
const AnimalList: FC<AnimalListProps> = (props) => {
    return <div></div>
};

AnimalList.defaultProps = {

}

export default AnimalList;
