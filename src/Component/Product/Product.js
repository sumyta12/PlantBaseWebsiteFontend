import React, { useEffect, useState } from "react";
import AllProduct from "../Home/Product";
import UseEffectHook from "../../Hooks/UseEffectHook";

const Product = () => {
  const [data, setData] = UseEffectHook(`/product.json`)
 
  if (data.length === 0) return null;
  return (
    <div>
      <section id="NewArrival">
        <div className="container">
          <div className="NewArrival_wrapper">
            <div className="row">
              <div className="col-lg-12 col-12 mt-lg-5 text-lg-center text-center">
                <h6 className="text-black">Discover</h6>
                <h1 className="text-black">The Desire Plants</h1>
              </div>
              <div className="col-lg-12 col-12">
                <div className="col-lg-12 col-12 mt-3">
                  <div className="col-top-wrapper text-lg-center text-center button_style"></div>
                </div>
                <div className="col-lg-12 col-12">
                  <div className="row mt-4" id="card_row">
                    {data.slice(0, data.length).map((product, index) => (
                      <AllProduct
                        productItem={product}
                        key={index}></AllProduct>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

