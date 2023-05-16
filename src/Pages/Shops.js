import React from "react";
import ShopGallery from "../Component/Shop/ShopGallery";
import Shop from "../Component/Shop/Shop";
import { Outlet } from "react-router-dom";

const Shops = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Shops;
