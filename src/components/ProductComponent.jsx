import React from "react";
import {
  addItemToCart,
  removeItemFromCart,
  selectProduct,
} from "../slices/productSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product group cursor-pointer  border-[1px] border-gray-400 flex flex-col md:flex-row rounded-md hover:-translate-y-2  hover:border-green-700 transition-all gap-3 items-center p-3">
      <div className="overflow-hidden h-32 w-32">
        <img
          src={product.image}
          alt=""
          className=" group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
        />
      </div>
      <div className="info flex-1">
        <h3 className="group-hover:text-green-700">{product.title}</h3>
        <h2 className="text-xl my-3">Rs. {product.price}</h2>

        <button
          onClick={() => dispatch(selectProduct(product))}
          className="bg-green-700 mr-3 text-white px-5 py-2 rounded-md"
        >
          Add To Cart
        </button>

        <button
          className="bg-blue-700 text-white px-5 py-2 rounded-md"
          onClick={() => dispatch(selectProduct(product))}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
