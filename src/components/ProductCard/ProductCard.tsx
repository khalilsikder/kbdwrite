import { TProduct } from "@/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Link } from "react-router-dom";

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
               Name: {product?.name}
              </p>
              <p className="text-sm text-muted-foreground">Brand: {product?.brand}</p>
              <p className="text-sm text-muted-foreground">
                AvailableQuantity: {product?.availableQuantity}
              </p>
              {/* <p className="text-sm text-muted-foreground">
               Description: {product?.description}
              </p> */}
              <p className="text-sm text-muted-foreground">Price: ${product?.price}</p>
              <p className="text-sm text-muted-foreground">Rating: ***{product?.rating}</p>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="text-center justify-center">
        <Button> <Link to='/detailsproduct'>show details</Link></Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
