import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useState } from "react";

const Products = () => {
  const { data } = useGetProductsQuery({});
  console.log(data);

  const [searchTearm, setSearchTearm] = useState("");
  // const [brandFilter, setBrandFilter] = useState("");
  // const [priceRange, setPricerange] = useState([0, 100]);
  // const [sortOrder, setSortOrder] = useState("");

  const handleSearchChange = (e) => setSearchTearm(e.target.value);
  // const handleBrandChange = (e) => setBrandFilter(e.target.value);
  // const handlePriceChange = (e) => {
  //   const newPricerange = [...priceRange];
  //   newPricerange[index] = e.target.value;
  //   setPricerange(newPricerange);
  // };
  // const handleSortChange = (e) => setSortOrder(e.target.value);
  // const handleClearFilters = () => {
  //   setSearchTearm("");
  //   setBrandFilter("");
  //   setPricerange([0, 100]);
  //   setSortOrder("");
  // };

  const filterProducts = data?.data
    ?.filter((product) =>
      product?.name?.toLowerCase().includes(searchTearm.toLowerCase())
    )
    // ?.filter((product) => (brandFilter ? product?.brand === brandFilter : true))
    // ?.filter(
    //   (product) =>
    //     product?.price >= priceRange[0] && product?.price <= priceRange[1]
    // )
    // ?.sort((a, b) => {
    //   if (sortOrder === "low to high") return a.price - b.price;
    //   if (sortOrder === "high to low") return b.price - a.price;
    //   return 0;
    // });

  return (
    <div className="container">
      <div className="flex gap-4 m-6 text-center justify-center">
        <input className="text-xl"
          type="text"
          placeholder="Search"
          value={searchTearm}
          onChange={handleSearchChange}
        />
        {/* <select value={brandFilter} onChange={handleBrandChange}>
          <option value="">All Brand</option>
          <option value="brand a">Brand a</option>
          <option value="brand b">Brand b</option>
          <option value="brand c">Brand c</option>
        </select> */}
        {/* <div>
          <input
            type="number"
            placeholder="Min Price"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>  */}
        {/* <select value={sortOrder} onChange={handleSortChange}>
          <option value="low to high">sort by price</option>
          <option value="high to low">sort by price</option>
        </select>
          <Button onClick={handleClearFilters}>Clear filters</Button> */}
      </div>
       <ul>
        {filterProducts?.map((product) => (
          <li key={product.id}>
            {/* {product.name} {product.brand} ${product.price} */}
          </li>
        ))}
      </ul>


      <div className="grid grid-cols-3">
        {data?.data?.map((product: TProduct) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}; 

export default Products;
