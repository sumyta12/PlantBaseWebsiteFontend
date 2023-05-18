import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const AddBucket = (props) => {
  const [click, setclick] = useState(false);
  return (
    <div>
      <div className="cartComponentcss">
        <div
          onClick={() => setclick(click === true ? false : true)}
          className="spancss">
          <span>{props.allitem.length}</span>
          <i className="fa-solid fa-cart-plus"></i>
        </div>
      </div>

      <div className="cardDesplayCss">
        {click && (
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Item List</Card.Title>
              {props?.allitem?.length === 0 ? (
                <h1>Your Cart Is Empty</h1>
              ) : (
                props?.allitem?.map((item, index) => (
                  <div key={index}>
                    <div className="row ">
                      <div className="col-lg-4">
                        <img width={"100%"} alt="img" src={item.img}></img>
                      </div>
                      <div className="col-lg-5 mt-3">
                        <h6>{item.name}</h6>
                      </div>
                      <div className="col-lg-3 mt-3">-</div>
                    </div>
                  </div>
                ))
              )}
              {props?.allitem?.length > 0 && (
                <button className="d-block w-100">Check Out</button>
              )}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AddBucket;
