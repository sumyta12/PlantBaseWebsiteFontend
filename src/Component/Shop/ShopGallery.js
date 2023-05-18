import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Home/Product";
const plant = [
  {
    _id: "1",
    name: "shop name 1",
    description:
      "An event tree is an inductive analytical diagram in which an event is analyzed using Boolean logic to examine a chronological series of subsequent events or consequences. For example, event tree analysis is a major component of nuclear reactor safety engineering.",
    img: "https://images.pexels.com/photos/11333863/pexels-photo-11333863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    itemlist: [
      {
        _id: "845fc58c57c00a5fdea4e906",
        index: 0,
        isActive: true,
        balance: "$3,670.59",
        img: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Soils.webp",
        name: "soil Mirage",
        category: "soil",
      },
      {
        _id: "845fc58c57c00a5fdea4e906",
        index: 0,
        isActive: true,
        balance: "$3,670.59",
        img: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Soils.webp",
        name: "tesla Mirage",
        category: "soil",
      },
    ],
  },
];
const ShopGallery = () => {
  const { shopId } = useParams();
  console.log(shopId);
  return (
    <div className="shopgalarrayCss">
      <div className="container">
        <div>
          <div className="row">
            <div className="col-4">
              <img
                className="imgclippathgenerator w-100"
                alt="img"
                src={plant[0].img}></img>
            </div>
            <div className="col-8">
              <div>
                <h3 className="text-center">{plant[0].name}</h3>
                <p className="plantcssstext">{plant[0].description}</p>
              </div>
            </div>
          </div>
          <h3 className="text-center">This Is Shop Avaible Item</h3>
          <div className="row">
            {plant[0].itemlist.map((item) => (
              <Product productItem={item}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGallery;
