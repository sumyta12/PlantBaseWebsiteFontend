import React from "react";
import Card from "react-bootstrap/Card";
import SharedData from "./SharedData";
import Chart from "../Product/Chart";
import Boxinfo from "./Boxinfo";
const DashBoard = () => {
  const { user } = SharedData();
  return (
    <div>
      <Card border="danger" style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>
            <h4 class="text-center m-4">
              Welcome <span>{user.email}</span>{" "}
            </h4>
          </Card.Title>
          <Boxinfo />
        </Card.Body>
        <Chart />
      </Card>
    </div>
  );
};

export default DashBoard;
