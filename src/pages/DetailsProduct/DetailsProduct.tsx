import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { addtoCart } from "@/redux/cartSlice";
import { TProduct } from "@/types";
import { useDispatch } from "react-redux";


export const DetailsProduct = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  const dispatch = useDispatch();
  const handleAddToCart = (product: TProduct) => {
    dispatch(addtoCart(product));
  };
  return (
    <div className="container">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="grid grid-cols-3">
            {data?.data?.map((product: TProduct) => (
              <div key={product._id}>
                <Card>
                  <CardHeader>
                    <img className="rounded-2xl" src={product?.image} />
                  </CardHeader>

                  <CardContent className="grid gap-4 text-center">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Name: {product?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Brand: {product?.brand}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          AvailableQuantity: {product?.availableQuantity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Description: {product?.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Price: ${product?.price}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Rating: ***{product?.rating}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="text-center justify-center">
                    <Button onClick={() => handleAddToCart(product)}>
                      add to cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DetailsProduct;
