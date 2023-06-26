import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { toggleDropdown } from "../slices/productSlice";
// Named import

const Header = () => {
  const dispatch = useDispatch();

  const [showDropDown, setShowDropDown] = useState(false);
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );
  const isVisible = useSelector((state) => state.product.showCartDropdown);
  console.log(isVisible);

  const selectedProductCount = selectedProducts.length;

  return (
    <header className="flex  flex-col md:flex-row py-3 gap-10 justify-between items-center px-10 bg-green-900 text-white">
      <Link to="/">
        <h1 className="text-3xl text-green">Logo</h1>
      </Link>
      <nav className="flex flex-col md:flex-row gap-4 items-center">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/our-works">Our Works</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/gallery">Gallery</Link>
        <div className="relative">
          <span className="absolute -top-5 -right-3 bg-red-600 text-sm px-2 rounded-md">
            {selectedProductCount}
          </span>

          {isVisible && (
            <div className=" text-gray-800 absolute right-0 top-[100%] dropdown bg-white z-20 w-72 h-72 overflow-y-auto shadow-md p-3 rounded">
              <button
                className="absolute right-3 top-3"
                onClick={() => dispatch(toggleDropdown(false))}
                // onClick={() => setShowDropDown(!showDropDown)}
              >
                <AiFillCloseCircle />
              </button>

              <h3>Cart Items ({selectedProductCount})</h3>
              <ul>
                {selectedProducts.length > 0 ? (
                  selectedProducts.map((item) => (
                    <li
                      className="bg-green-100 mt-2 rounded p-3 flex flex-col"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        style={{
                          height: "50px",
                          width: "50px",
                          objectFit: "cover",
                        }}
                      />
                      {item.title}{" "}
                      <span className="font-bold"> Rs. {item.price}</span>
                    </li>
                  ))
                ) : (
                  <h1>No Products in Cart</h1>
                )}
              </ul>
            </div>
          )}
          <div onClick={() => dispatch(toggleDropdown(true))}>
            <AiOutlineShoppingCart />
          </div>
        </div>
        <Link to="/contact">
          <button className="bg-green-700 p-3 rounded-lg hover:bg-black">
            Contact
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
