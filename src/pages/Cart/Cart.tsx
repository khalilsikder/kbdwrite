
import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state) => state.cartItems);
  const dispatch = useDispatch()
  const handleRemoveFromCart = (cartItem: any) => {
     dispatch(removeFromCart(cartItem))
  }
  return (
    <div>
      <div>
        {cart.cartItems?.length === 0 ? (
          <div>
            <p>your cart is empty</p>
            <div>
              <Link to="/"></Link>
            </div>
          </div>
        ) : (
          <div className="container">
            <h1 className="text-center text-2xl mx-auto mb-6">Shopping cart</h1>
            <div>
              {cart?.cartItems?.map((cartItem: any) => (
                <div className="flex" key={cartItem.id}>
                  <div className="text-center mx-auto">
                    <img className="m-2" src= {cartItem?.image} alt="" />
                    <h3 className="m-2">Product:  {cartItem?.name}  </h3>
                    <h3 className="m-2">Price:  ${cartItem?.price}  </h3>
                    <p className="m-2">Quantity: {cartItem?.quantity} </p>
                    <p className="m-2">TotalPrice: ${cartItem?.price * cartItem?.quantity} </p>
                    <div className="grid bg-red-600 mb-6">
                      <div className="flex gap-28">
                        <p>Remove</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>                      
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                     <Link to= '/checkout'>
                      <div className="flex gap-28 bg-[#06dbdb]">
                        <p>Proceed</p>
                        <button>
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
                              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                            />
                          </svg>
                        </button>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
