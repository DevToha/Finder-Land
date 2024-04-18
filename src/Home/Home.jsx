import { useLocation } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Destinations from "../Components/Discover Top Destinations/Destinations";
import Estates from "../Components/Estates secton/Estates/Estates";
import PropertyTypes from "../Components/Property Types/PropertyTypes";
import Review from "../Components/Review/Review";
import { useEffect } from "react";
// import Extra from "../Components/extra/Extra";

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        document.title = "Finder land/Home";
    }, [location.pathname]);

    return (
        <div>
            <Banner></Banner>
            {/* <Extra></Extra> */}
            <Estates></Estates>
            <PropertyTypes></PropertyTypes>
            <Destinations></Destinations>
            <div className="">
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;