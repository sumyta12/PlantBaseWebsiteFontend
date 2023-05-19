import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import UseAuth from "../Context/UseAuth";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Student = () => {
  const { createUserEmailandPass } = UseAuth();
  const [details, setdetails] = useState({});
  function handlerdetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { ...details, type: "student" };
    newValue[name] = value;
    setdetails(newValue);
  }
  function handlersubmit(e) {
    createUserEmailandPass(details);
    e.preventDefault();
  }

  return (
    <div className="loginpagecss">
      <Container className="mainform">
        <Row className="d-flex justify-content-center align-item-center">
          <Col lg={6} md={6} sm={12}>
            <h2 className="login-text">This is Student Registration</h2>
            <Form className="login-form" onSubmit={handlersubmit}>
              <Form.Group controlId="formBasicShopemail">
                <Form.Label>Student email</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="email"
                  type="email"
                  placeholder="Enter student email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicShoppass">
                <Form.Label>Student email password</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="password"
                  type="password"
                  placeholder="Enter student password"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicShopName">
                <Form.Label>University Name</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="universityName"
                  type="text"
                  placeholder="Enter University Name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicaddress">
                <Form.Label>Your University Address</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="location"
                  type="text"
                  placeholder="location"
                  required
                />
              </Form.Group>
              <Button
                className="mt-3 login-submit"
                variant="primary"
                type="submit">
                Registration As a student
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Student;
