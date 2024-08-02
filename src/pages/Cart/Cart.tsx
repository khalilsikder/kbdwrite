import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container">
      <h1>Shopping cart</h1>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <div>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Totall</h3>
          </div>
          <div>
            {cart.cartItems?.map((cartItem) => (
              <div key={cartItem.id}>
                <div>
                  <img src={cartItem.image} alt="" />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <h3>{cartItem.description}</h3>
                    <Button>Remove</Button>
                  </div>
                </div>
                <div>${cartItem.price}</div>
                <div>
                  <button> - </button>
                  <div>{cartItem.Quantity}</div>
                  <button> + </button>
                </div>
                <div>${cartItem.price * cartItem.Quantity}</div>
              </div>
            ))}
          </div>
          <div>
           <button>clear cart</button>
           <div>
            <div>
              <span>Subtotall</span>
              <span>${cart.cartTotallAmount}</span>
            </div>
            <p>taxes & shipping calculated in checkout</p>
            <Button>Check out</Button>
            <div>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          </div>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
