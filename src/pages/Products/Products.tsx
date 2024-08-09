import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useState } from "react";

const Products = () => {
  const [searchTearm, setSearchterm] = useState("");
  const { data } = useGetProductsQuery({});
  console.log(data);

  return (
    <div className="container">
      <div className=" flex text-xl text-center justify-center mx-auto mb-6">
        <input id="searchInput" type="text" placeholder="Search here" onChange={(event) => {setSearchterm(event.target.value)}} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div className="grid grid-cols-3">
        {
          data?.data?.filter((product:TProduct) => {
           if(searchTearm === ''){
            return product;
           } else if(product.name.toLowerCase().includes(searchTearm.toLocaleLowerCase())){
            return product;
           } 
          })
          .map((product: TProduct) => (
            <ProductCard key={product?._id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default Products;
