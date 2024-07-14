import { useGetProductsQuery } from "@/redux/api/baseApi";


const ProductShow = () => {
    const {data,isLoading} = useGetProductsQuery({})
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default ProductShow;
