import './property.css'
import { MdHolidayVillage } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { RiBuilding2Line } from "react-icons/ri";
import { HiOutlineHomeModern } from "react-icons/hi2";



const PropertyTypes = () => {
    return (
        <div className="mt-10 p-10">
            <h1 className="text-4xl font-bold mb-10 ">Property Types</h1>
            <div className="flex justify-center gap-5">
                <div className="card16 p-10 rounded-2xl cursor-pointer">
                    <div className="card16-header">
                        <p className='text-[90px]'><MdHolidayVillage /></p>
                    </div>
                    <div className="card16-details">
                        <h1 className="card16-title">Villa</h1>
                        <p className="card16-text">
                            32 Properties
                        </p>
                    </div>
                </div>
                <div className="card16 p-10 rounded-2xl cursor-pointer">
                    <div className="card16-header">
                        <p className='text-[90px]'><GiFamilyHouse />
                        </p>
                    </div>
                    <div className="card16-details">
                        <h1 className="card16-title">Penthouse</h1>
                        <p className="card16-text">
                            42 Properties
                        </p>
                    </div>
                </div>
                <div className="card16 p-10 rounded-2xl cursor-pointer">
                    <div className="card16-header">
                        <p className='text-[90px]'><FaRegBuilding />
                        </p>
                    </div>
                    <div className="card16-details">
                        <h1 className="card16-title">resorts</h1>
                        <p className="card16-text">
                            20 Properties
                        </p>
                    </div>
                </div>
                <div className="card16 p-10 rounded-2xl cursor-pointer">
                    <div className="card16-header">
                        <p className='text-[90px]'><HiOutlineHomeModern />
                        </p>
                    </div>
                    <div className="card16-details">
                        <h1 className="card16-title">private islands</h1>
                        <p className="card16-text">
                            26 Properties
                        </p>
                    </div>
                </div>
                <div className="card16 p-10 rounded-2xl cursor-pointer">
                    <div className="card16-header">
                        <p className='text-[90px]'><BsBuildings />
                        </p>
                    </div>
                    <div className="card16-details">
                        <h1 className="card16-title">mansions</h1>
                        <p className="card16-text">
                            18 Properties
                        </p>
                    </div>
                </div>
                <div className="card16 p-10 rounded-2xl cursor-pointer">
                    <div className="card16-header">
                        <p className='text-[90px]'><RiBuilding2Line />
                        </p>
                    </div>
                    <div className="card16-details">
                        <h1 className="card16-title">Beachfront properties</h1>
                        <p className="card16-text">
                            12 Properties
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyTypes;