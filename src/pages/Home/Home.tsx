
import ProductCard from "@/components/ProductCard/ProductCard";

import ServiceOffer from "@/components/serviceoffer/ServiceOffer";
import ProductSection from "@/components/productSection/ProductSection";
import ProductShow from "@/components/productShow/ProductShow";
const Home = () => {
    return (
        <div className="mx-auto container">
           <ProductSection></ProductSection>
           <ServiceOffer></ServiceOffer>
           <ProductShow></ProductShow>
          
        </div>
    );
};

export default Home;