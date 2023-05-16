import React, { useEffect, useState } from "react";
import AllProduct from "../Home/Product";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let set = false;
    if (!set) {
      fetch(`/product.json`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    return () => {
      set = true;
    };
  }, []);
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
// {data.slice(0, 4).map((product, index) => (
//     <Product productItem={product} key={index} />
//   ))}
