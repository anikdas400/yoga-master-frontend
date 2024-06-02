import Gallery from "./Gallery/Gallery";
import HeroContainer from "./Hero/HeroContainer";
import PopularClasses from "./PopularClasses/PopularClasses";



const Home = () => {
    return (
        <section>
            <HeroContainer/>
            <div className="max-w-screen-xl mx-auto">
            <Gallery/>
            </div>
            <div>
                <PopularClasses/>
            </div>
            
            
        </section>
    );
};

export default Home;