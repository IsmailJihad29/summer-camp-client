import PopularClasses from "../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";


const Home = () => {
    return (
        <div>
            <Banner />
            <Offers/>
            <PopularClasses/>
        </div>
    );
};

export default Home;