import PopularClasses from "../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner />
            <PopularInstructor/>
            <Offers/>
            <PopularClasses />
            <Reviews/>
            
        </div>
    );
};

export default Home;