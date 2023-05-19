import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import Alert from "react-bootstrap/Alert";
const LoginPage = () => {
  // show
  const [show, setShow] = useState(true);
  const { signInEmailandPass, error } = UseAuth();
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

  return (
    <div className="loginpagecss">
      <Container className="mainform">
        <div>
          <Row className="row d-flex justify-content-center align-item-center">
            <Col lg={6} md={6} sm={12}>
              <Form className="login-form" onSubmit={handlersubmit}>
                <h2 className="login-text"> LOGIN</h2>
                {error && (
                  <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>{error}</p>
                  </Alert>
                )}
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
                <Link
                  to="/register">
                 If you are not Register?
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
