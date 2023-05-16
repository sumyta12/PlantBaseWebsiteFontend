import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UseAuth from "../Context/UseAuth";

const RegistrationForm = () => {
  const { handlegooglesignin, createUserEmailandPass } = UseAuth();
  const [details, setdetails] = useState({});
  function handlerdetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { ...details };
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
            <Form className="login-form" onSubmit={handlersubmit}>
              <h2 className="login-text"> Registration</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />

                <Button
                  className="mt-3 login-submit"
                  variant="primary"
                  type="submit">
                  Registration
                </Button>

                <br />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button className="mt-3 bg-danger " onClick={handlegooglesignin}>
          Google
        </Button>
      </Container>
    </div>
  );
};

export default RegistrationForm;
