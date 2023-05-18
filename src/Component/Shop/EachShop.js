import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const EachShop = (data) => {
  const {
    _id,
    img,
    name,
    email,
    loaction,
    type,
    description,
    addition,
    title,
    urlink
  } = data.shopdata;
  const navigation = useNavigate();
  function handlerClick(id) {
    navigation("/shop/" + id);
  }
  return (
    <div className="card-desgin-el">
      <Card style={{ width: "90%" }}>
        <div className="row">
          {img ? (
            <div className="col-3 d-flex justify-content-center align-items-center">
              <img width="50%" alt="img" src={img}></img>
            </div>
          ) : (
            ``
          )}
          <div className="col-9 ">
            <h2 className="mt-3 ms-3">{title ? title : ``}</h2>
            <h4 className="mt-3 ms-3">{name}</h4>
            {type ? (
              <div className="d-flex ms-3 align-items-baseline">
                <p >{email?.charAt(0).toUpperCase() + email?.slice(1, 6)}</p>
                <span className="roundshap">{type}</span>
              </div>
            ) : (
              ""
            )}
            <p className="mt-4 ms-3">
              {description && <p className="ptagcss">{description}</p>}
              {urlink && <p className="ptagcss text-primary">{urlink}</p>}
              <div>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    {loaction && (
                      <div className="mt-4 mb-1">
                        <p className="text-primary">🚫 Free shipping</p>
                        <br />
                        <p className="ptagcss">⚠ Well Balance</p>
                        <br />
                        <p className="ptagcss">‼ No Refund Possible</p>
                        <br />
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 col-6">
                    {addition && <p className="ptagcss">{addition}</p>}
                  </div>
                </div>
              </div>
              <h1></h1>
              {loaction && `Location :  ${loaction?.charAt(0).toUpperCase()+loaction?.slice(1)} `}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-6"></div>
          <div className="col-6 col-lg-6 mb-4">
            <div className="d-flex justify-content-center">
              {!type && (
                <button onClick={() => handlerClick(_id)}>View Nursery</button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EachShop;
