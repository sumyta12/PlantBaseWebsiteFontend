import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import { Link, Outlet } from "react-router-dom";
import SharedData from "./SharedData";
const ProfileDashboard = () => {
  const { user } = SharedData();
  return (
    <div className="profiledashboardcss">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-2">
            <Card border="danger" style={{ width: "80%" }}>
              <Card.Body>
                <Nav.Link as={Link} to="/dashboard">
                  <Card.Title>Dashboard</Card.Title>
                </Nav.Link>

                {(user.type === "shopowner" || user.type === "student") && (
                  <>
                    <Nav.Link as={Link} to="/dashboard/addcard">
                      <Card.Title>Add Card</Card.Title>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/addblog">
                      <Card.Title>Add Blog</Card.Title>
                    </Nav.Link>
                  </>
                )}

                <Nav.Link as={Link} to="/dashboard/addcard">
                  <Card.Title>Settings</Card.Title>
                </Nav.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-8 mt-4 mt-lg-0 col-sm-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
