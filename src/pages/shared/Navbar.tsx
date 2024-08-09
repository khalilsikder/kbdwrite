
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state)=>state.cart.cart)
  return (
    <div className="container">
      <div className="flex justify-between py-8 container">
        <div className="text-2xl">
          <p>
            <Link to='/'>kbd<span className="text-[#04d3e6]">write</span></Link>
          </p>
        </div>
        <div className="flex gap-8 text-lg">
          <p>
            <Link to= '/'>Home</Link>
          </p>
          <p>
            <Link to= '/products'>Products</Link>
          </p>
          <p>
            <Link to= '/aboutus'>About Us</Link>
          </p>
          <p>
            <Link to= '/contractus'>Contract Us</Link>
          </p>
          <p>
            <Link to= '/dashboard'>Dashboard</Link>
          </p>  
        </div>
        <Link to= '/cart'>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          {cart.length}
          </div>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
