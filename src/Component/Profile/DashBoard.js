import React from "react";
import Card from "react-bootstrap/Card";
import SharedData from "./SharedData";
const DashBoard = () => {
  const {user} = SharedData();
  return (
    <div>
      <Card border="danger" style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>
            <h4>Welcome <span>{user.email}</span> </h4> 
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashBoard;

