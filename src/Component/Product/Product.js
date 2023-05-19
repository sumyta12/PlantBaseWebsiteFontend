import React, { useState } from "react";
import AllProduct from "../Home/Product";
import UseEffectHook from "../../Hooks/UseEffectHook";
import AddBucket from "./AddBucket";

const Product = () => {
  const [data] = UseEffectHook(`/product.json`);
  const [allitem, setitem] = useState([]);
  const [filterproduct , setfilterproduct] = useState([]);
  function handlerProductoCart(product) {
    const totalProductItem = [...allitem, product];
    const newarr = [];
    const total = totalProductItem.filter(function (item) {
      const duplicate = newarr.includes(item._id)
      if(!duplicate){
        newarr.push(item._id)
        return true;
      }else{
      return false;
      }
    })
    setitem(totalProductItem)
    setfilterproduct(total)
  }

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
                  <AddBucket allitem={filterproduct} />
                  <div className="row mt-4" id="card_row">
                    {data.slice(0, data.length).map((product, index) => (
                      <AllProduct
                        productItem={product}
                        handlerProductoCart={handlerProductoCart}
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
