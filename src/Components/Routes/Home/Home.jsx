import DemoPlace from "./DemoPlace/DemoPlace";
import Destination from "./Destination/Destination";
import Populars from "./Populars/Populars";
import TourFacility from "./TourFacility/TourFacility";
import Tourplace from "./TourPlace/Tourplace";

const Home = () => {

    return (
     <div>
        <Destination/>
        <Populars/>
        <DemoPlace/>
        <Tourplace/>
        <TourFacility/>
     </div>
    );
};

export default Home;
