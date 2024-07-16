const Navbar = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-8 container">
        <div className="text-2xl">
          <a href="kbdwrite">
            kbd<span className="text-[#04d3e6]">write</span>
          </a>
        </div>
        <div className="flex gap-8 text-lg">
          <p>
            <a href="">Home</a>
          </p>
          <p>
            <a href="products">Products</a>
          </p>
          <p>
            <a href="aboutus">About Us</a>
          </p>
          <p>
            <a href="contractus">Contract Us</a>
          </p>
          <p>
            <a href="dashboard">Dashboard</a>
          </p>
        </div>
        <p>
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
        </p>
      </div>
    </div>
  );
};

export default Navbar;
