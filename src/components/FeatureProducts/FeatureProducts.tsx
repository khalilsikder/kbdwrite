import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";

const FeatureProducts = () => {
  const { data } = useGetProductsQuery({});
  console.log(data)
;
  return (
    <div className="container">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data?.slice(0,6).map((product: TProduct) => (

          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center justify-center text-[#04D3E6] text-xl">
        <Link to="/products">see more products</Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
