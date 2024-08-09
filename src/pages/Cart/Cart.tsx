import { useSelector } from "react-redux";

const Cart = () => {
 const cartItems = useSelector(state => state.cart.cart)
  return (
    <div className="container">
      <h2 className="text-2xl text-center mx-auto">Shopping Cart</h2>
      <div className="container flex justify-between mt-6">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
    {
      cartItems?.map(item => {
        return (
          <div className="container">
            <img src= {item.image} alt="" />
            <div>
              <p>{item.name}</p>
              <button>Remove</button>
            </div>
          </div>
        )
      })
    }
    </div>
  );
};

export default Cart;

