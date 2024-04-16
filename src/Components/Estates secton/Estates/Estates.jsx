import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";


const Estates = () => {

    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])


    return (
        <div>
            <h2 className="text-center font-bold text-4xl mb-10">Estates:{estates.length}</h2>

            <div className="lg:grid lg:grid-cols-3 lg:ml-10">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>

        </div>
    );
};

export default Estates;