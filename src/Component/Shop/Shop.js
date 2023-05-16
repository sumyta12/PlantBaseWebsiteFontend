import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Footer from "../Home/Footer";
import EachShop from "./EachShop";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    let set = false;
    if (!set) {
      fetch(`/shop.json`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setfilterdata(data);
        });
    }
    return () => {
      set = true;
    };
  }, []);
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  function handleButton(text, data) {
    const texts = data.filter(function (datas) {
      if (datas.loaction === text.toLowerCase()) {
        return datas;
      } else if (text === "") {
        return datas;
      }
      return false;
    });
    setfilterdata(texts);
  }
  if (data.length === 0) return null;
  return (
    <div id="nearestshop">
      <h1 className="text-center">Search Nearest Shop</h1>
      <div className="container">
        <div className="d-flex justify-content-center align-content-center mb-4">
          <input
            className="form-control formintput me-2"
            type="text"
            onChange={handleChange}
            value={searchText}
            placeholder="Search Like dhanmondi"
          />
          <button onClick={() => handleButton(searchText, data)}>Search</button>
        </div>
        {filterdata.length > 0 ? (
          filterdata.map((datas, index) => (
            <EachShop shopdata={datas} key={index}></EachShop>
          ))
        ) : (
          <div className="card-desgin-el">
            <Card border="danger" style={{ width: "18rem" }}>
              <Card.Header>Not Found</Card.Header>
              <Card.Body>
                <Card.Title>This {searchText} is Not found</Card.Title>
                <Card.Text>
                  If There is no Location found you can communicate with us.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
     
      <Footer />
    </div>
  );
};

export default Shop;
