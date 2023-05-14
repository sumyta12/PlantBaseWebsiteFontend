import React from "react";
import { Link } from "react-router-dom";

const Product = (productItem) => {
  const { name, img, _id, balance } = productItem.productItem;

  return (
    <div className="col-lg-3 mt-3">
      <div className="cards_el">
        <div className="top_info d-flex justify-content-between">
          <span>
            <i className="fas fa-heart"></i>
            <small className="text-black"> 14</small>
          </span>
          <span>
            <i className="fas fa-sort"></i>
            <small className="text-black"> 1.00</small>
          </span>
        </div>
        <div className="img_cover position-relative">
          <img className="position-relative" alt="img" src={img}></img>
          <Link className=" hover-shadow text-danger" href="#">
            <span>
              <i className="fa-solid fa-basket-shopping"></i>
              Buy Now
            </span>
          </Link>
        </div>
        <div className="info">
          <small>
            Price : {balance}
            <span></span>
          </small>
          <h5>{name} </h5>
          <div className="btm-inf d-flex justify-content-between mt-3">
            <p>
              <i className="fa-solid fa-users"></i>
              <span> 10Km Distance</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
