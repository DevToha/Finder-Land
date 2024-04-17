import Banner from "../Components/Banner/Banner";
import Destinations from "../Components/Discover Top Destinations/Destinations";
import Estates from "../Components/Estates secton/Estates/Estates";
import PropertyTypes from "../Components/Property Types/PropertyTypes";
import Review from "../Components/Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
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