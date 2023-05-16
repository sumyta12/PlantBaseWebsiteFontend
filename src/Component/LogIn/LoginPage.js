import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import PracticeUsefirebases from "../../Utiles/PracticeUsefirebases";
import UseAuth from "../../Context/UseAuth";

const LoginPage = () => {
  const [clicked, setclicked] = useState(false);
  const { signInEmailandPass } = UseAuth();
  const [details, setdetails] = useState({});
  function handlerdetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { ...details };
    newValue[name] = value;
    setdetails(newValue);
  }
  function handlersubmit(e) {
    signInEmailandPass(details);
    e.preventDefault();
  }
  function handlerLogin(e) {
    if (e.target.checked === true) {
      setclicked(true);
    } else {
      setclicked(false);
    }
  }
  return (
    <div className="loginpagecss">
      <Container className="mainform">
        <div>
          <Row className="row d-flex justify-content-center align-item-center">
            <Col lg={6} md={6} sm={12}>
              <Form className="login-form" onSubmit={handlersubmit}>
                <h2 className="login-text"> LOGIN</h2>
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
                    Log In
                  </Button>

                  <br />
                </Form.Group>
              </Form>
              <div>
                <Form.Group className="mt-3">
                  <Form.Check
                    onClick={handlerLogin}
                    label="Are you Not Registered?"
                  />
                  {clicked ? (
                    <Link to="/register" type="button">
                      Register
                    </Link>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
