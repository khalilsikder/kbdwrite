import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/types";


const ProductShow = () =>{
    const {data} = useGetProductsQuery({})
    console.log(data);
    const {data:products} = data;

    return (
        <div className="grid grid-cols-3">
            {
                products.slice(0,6).map((product:TProduct) =>(<ProductCard key={product?._id} product={product}></ProductCard>))
            }
        </div>
    );
};

export default ProductShow;
