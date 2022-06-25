import { FC, useEffect } from "react";
type PetTypeListProps = {

    petTypes: any[],
    fetchPetTypes: () => void
}
const PetTypeList: FC<PetTypeListProps> = (props) => {
    useEffect(() => { }, []);
    return <div>This is PetTypeList</div>
};

PetTypeList.defaultProps = {

}

export default PetTypeList;
