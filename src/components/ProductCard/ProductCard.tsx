import { TProduct } from "@/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Link } from "react-router-dom";
import RatingModal from "../ratingModal/RatingModal";

export const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <Card>
      <Link to={`/${product?.slug}`}>
        <CardHeader>
          <img className="rounded-2xl" src={product?.image} />
        </CardHeader>

        <CardContent className="grid gap-4 text-center">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
               Title: {product?.title}
              </p>
              <p className="text-sm text-muted-foreground">Brand: {product?.brand}</p>
              <p className="text-sm text-muted-foreground">
                AvailableQuantity: {product?.availableQuantity}
              </p>
              <p className="text-sm text-muted-foreground">
               Description: {product?.description}
              </p>
              <p className="text-sm text-muted-foreground">Price: ${product?.price}</p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
             Rating: {product?.rating}<RatingModal></RatingModal>
            </p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="text-center justify-center">
        <Button>
          <a href="">see details</a>
        </Button>
      </CardFooter>
    </Card>

    // <div>
    // <h1 className="text-3xl text-center mt-8">Best Keyboards</h1>
    // <div className="grid md:grid-cols-3 w-full">
    //   <div className="card bg-base-100 shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img
    //         src="https://i.ibb.co/ssFztWs/key3.jpg"
    //         alt="Shoes"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">Gaming keyboard</h2>
    //       <p>Brand:SAmsung</p>
    //       <p>Available Quantity:20</p>
    //       <p>Price:$80</p>
    //       <p>Ratting:</p>
    //       <div className="card-actions">
    //         <Button><a href="">See Details</a></Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card bg-base-100 w-full shadow-xl">
    //     <figure className="pt-10">
    //       <img
    //         src="https://i.ibb.co/FKTmhrV/key15.jpg"
    //         alt="Shoes"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">Gaming keyboard</h2>
    //       <p>Brand:SAmsung</p>
    //       <p>Available Quantity:20</p>
    //       <p>Price:$80</p>
    //       <p>Ratting:</p>
    //       <div className="card-actions">
    //         <Button><a href="">See Details</a></Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card bg-base-100 w-full shadow-xl">
    //     <figure className="pt-10">
    //       <img
    //         src="https://i.ibb.co/TKPBN4Z/key6.jpg"
    //         alt="Shoes"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">Gaming keyboard</h2>
    //       <p>Brand:SAmsung</p>
    //       <p>Available Quantity:20</p>
    //       <p>Price:$80</p>
    //       <p>Ratting:</p>
    //       <div className="card-actions">
    //         <Button><a href="">See Details</a></Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card bg-base-100 w-full shadow-xl">
    //     <figure className="pt-10">
    //       <img
    //         src="https://i.ibb.co/vQPFSdY/key9.jpg"
    //         alt="Shoes"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">Gaming keyboard</h2>
    //       <p>Brand:SAmsung</p>
    //       <p>Available Quantity:20</p>
    //       <p>Price:$80</p>
    //       <p>Ratting:</p>
    //       <div className="card-actions">
    //         <Button><a href="">See Details</a></Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card bg-base-100 w-full shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img
    //         src="https://i.ibb.co/68NbjXF/key8.jpg"
    //         alt="Shoes"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">Gaming keyboard</h2>
    //       <p>Brand:SAmsung</p>
    //       <p>Available Quantity:20</p>
    //       <p>Price:$80</p>
    //       <p>Ratting:</p>
    //       <div className="card-actions">
    //         <Button><a href="">See Details</a></Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card bg-base-100 w-full shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img
    //         src="https://i.ibb.co/FKTmhrV/key15.jpg"
    //         alt="Shoes"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">Gaming keyboard</h2>
    //       <p>Brand:SAmsung</p>
    //       <p>Available Quantity:20</p>
    //       <p>Price:$80</p>
    //       <p>Ratting:</p>
    //       <div className="card-actions">
    //         <Button><a href="">See Details</a></Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default ProductCard;
