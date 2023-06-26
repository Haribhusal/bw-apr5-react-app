import React from "react";
import products from "./../data/products.json";
import ProductComponent from "../components/ProductComponent";

const ProductsPage = () => {
  return (
    <>
      <div className="productwrapper p-10">
        <h3 className="text-3xl text-center font-bold">All Products</h3>
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))
          ) : (
            <p>No Products Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
