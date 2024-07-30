import Banner from "../components/Banner";
import Feature from "../components/Feature";
import FeatureProduct from "../components/Featureproduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/Homepage.css"
const Homepage = () => {
    return ( <div>


<Header/>
<div id="heroo">
<Hero/>

</div>


<div id="Feature">
<Feature/>

</div>

<div>

<FeatureProduct/>


</div>

<Banner/>


<div id="footer"><Footer/></div>




    </div>
    
);
}
 
export default Homepage;