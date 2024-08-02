import ServiceOffer from "@/components/serviceoffer/ServiceOffer";
import ProductSection from "@/components/productSection/ProductSection";
import ReviewProducts from "@/components/reviewProducts/ReviewProducts";
import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
const Home = () => {
    return (
        <div className="mx-auto container">
           <ProductSection></ProductSection>
           <ServiceOffer></ServiceOffer>
           <FeatureProducts></FeatureProducts>
           <ReviewProducts></ReviewProducts>
        </div>
    );
};

export default Home;