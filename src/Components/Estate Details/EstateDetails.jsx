import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {

    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);

    return (
        <div>
            EstateDetails:{estate.estate_title}
            {/* jiiiiiii */}
        </div>
    );
};

export default EstateDetails;