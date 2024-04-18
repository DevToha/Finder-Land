import { useLoaderData, useLocation, useParams } from "react-router-dom";

import './Esatate.css'
import { useEffect } from "react";
const EstateDetails = () => {

    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    const location = useLocation();

    useEffect(() => {
        document.title = "Estate Details";
    }, [location.pathname]);

    return (
        <div>
            {/* name:{bookName} */}

            <div className='px-[80px] mt-10'>
                <div className="lg:flex border border-gray-300 rounded-lg gap-20">
                    <div className=''>
                        <img className=" h-[472px]  w-[650px] mr-2" src={estate.image} alt="" />
                    </div>
                    <div>
                        <div className="ml-4 lg:mb-0 py-7">
                            <div className="items-center gap-60">
                                <h2 className="card-title font-extrabold text-[20px] mb-2">{estate.estate_title}</h2>
                                <p>Price : {estate.price}</p>
                                <p>Status : {estate.status}</p>
                            </div>

                            <div className='mb-4'>
                                <div className='items-center lg:mb-0 mb-3 gap-2'>
                                    <div className="flex items-center gap-60">
                                        <p>Location : {estate.location}</p>

                                    </div>

                                    <p>Segment Name : {estate.segment_name}</p>
                                    <p>Facilities : {estate.facilities}</p>

                                    <div className="flex items-center gap-40">
                                        <p>Number Bedrooms : {estate.num_bedrooms}</p>
                                        <p>Number Bathrooms : {estate.num_bathrooms}</p>
                                    </div>
                                    <div className="flex items-center gap-60">
                                        <p>Year Built : {estate.year_built}</p>
                                        <p>Area : {estate.area}</p>
                                    </div>
                                    <div className=" items-center gap-20">
                                        <p>Contact Email : {estate.contact_email}</p>
                                        <p>Contact Phone : {estate.contact_phone}</p>
                                    </div>

                                </div>

                                <div className="card3-actions">
                                    <button className="card3-manage w-[140px] h-[50px] rounded-lg">ADD TO CART</button>
                                    {/* <button className="card3-accept">Accept</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;