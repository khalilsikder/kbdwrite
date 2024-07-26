import ServiceOffer from "@/components/serviceoffer/ServiceOffer";
import ProductSection from "@/components/productSection/ProductSection";
import ProductShow from "@/components/FeatureProducts/FeatureProducts";
import ReviewProducts from "@/components/reviewProducts/ReviewProducts";
const Home = () => {
    return (
        <div className="mx-auto container">
           <ProductSection></ProductSection>
           <ServiceOffer></ServiceOffer>
           <ProductShow></ProductShow>
           <ReviewProducts></ReviewProducts>
        </div>
    );
};

export default Home;