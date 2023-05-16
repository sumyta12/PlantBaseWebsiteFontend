import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const EachShop = (data) => {
  const { _id, img, name, loaction, type, description, title } = data.shopdata;
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
          <div className="col-9 col-sm-12">
            <h2 className="mt-3 ms-3">{title ? title : ``}</h2>
            <h4 className="mt-3 ms-3">{name}</h4>
            {type ? <span className="roundshap">{type}</span> : ""}
            <p className="mt-4 ms-3">
              {description
                ? description
                : ` Trusted Shipping Providing trusted shipping with a refund policy.`}
            </p>
          </div>
        </div>

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text className="ps-3">
            {loaction ? `Location :  ${loaction.toUpperCase()} ` : ``}
          </Card.Text>
        </Card.Body>
        {!type && (
          <button onClick={() => handlerClick(_id)}>View Nursery</button>
        )}
      </Card>
    </div>
  );
};

export default EachShop;
