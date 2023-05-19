import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Home/Product";

const ShopGallery = () => {
  const { shopId } = useParams();
  const [shopinfo, setShopinfo] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/dummyshopdata/data/${shopId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setShopinfo(data));
  }, [shopId]);
  console.log(shopinfo);
  if (shopinfo === null) return <h1 className="text-center text-danger shopgalarrayCss">You can Contact with support@gmail.com</h1>;
  if (shopinfo.length === 0) return null;
  return shopinfo.length === 0 ? (
    <h1>You can Contact with support@gmail.com</h1>
  ) : (
    <div className="shopgalarrayCss">
      <div className="container">
        <div>
          <div>
            <div className="row">
              <div className="col-4">
                <img
                  className="imgclippathgenerator w-100"
                  alt="img"
                  src={shopinfo.img}></img>
              </div>
              <div className="col-8">
                <div>
                  <h3 className="text-center">{shopinfo.name}</h3>
                  <p className="plantcssstext">{shopinfo.addition}</p>
                </div>
              </div>
            </div>
            <h3 className="text-center">This Is Shop Avaible Item</h3>
            <div className="row">
              {shopinfo.itemlist.map((item, index) => (
                <Product key={index} productItem={item}></Product>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGallery;
