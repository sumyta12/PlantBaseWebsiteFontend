import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UseAuth from "../Context/UseAuth";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const RegistrationForm = () => {
  const [show, setShow] = useState(true);
  const [clicked, setclicked] = useState(false);
  const { usersdata, handlegooglesignin, error, createUserEmailandPass } =
    UseAuth();
  const [details, setdetails] = useState({});
  function handlerdetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "address" || name === "shopname") {
      if (details.type === "user") {
        details.type = "shopowner";
      }
      const newValue = { ...details, type: "shopowner" };
      newValue[name] = value;
      setdetails(newValue);
    } else {
      const newValue = { ...details, type: "user" };
      newValue[name] = value;
      setdetails(newValue);
    }
  }
  function handlersubmit(e) {
    // console.log(details);
    createUserEmailandPass(details);

    e.preventDefault();
  }
  function handlerfromexpand(e) {
    if (e.target.checked === true) {
      setclicked(true);
    } else {
      setclicked(false);
    }
    setdetails({});
  }

  return (
    <div className="loginpagecss">
      <Container className="mainform">
        <Row className="d-flex justify-content-center align-item-center">
          <Col lg={6} md={6} sm={12}>
            <Form className="login-form" onSubmit={handlersubmit}>
              {!usersdata?.email && (
                <h2 className="login-text"> Registration</h2>
              )}

              {/**if any error occure */}
              {error && (
                <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible>
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>{error}</p>
                </Alert>
              )}
              {usersdata?.email && (
                <Alert variant="success">
                  Hey {usersdata?.email} welcome to see
                  <Alert.Link as={Link} to="dashboard">
                    {" "}
                    Your Dasboard
                  </Alert.Link>
                  . click if you like.
                </Alert>
              )}
              {/**this is for shop  */}
              {!clicked && (
                <>
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
                  </Form.Group>
                </>
              )}

              {}
              {clicked ? (
                <>
                  <Form.Group controlId="formBasicShopemail">
                    <Form.Label>shop email</Form.Label>
                    <Form.Control
                      onBlur={handlerdetails}
                      name="email"
                      type="email"
                      placeholder="Enter shop email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicShoppass">
                    <Form.Label>shop email password</Form.Label>
                    <Form.Control
                      onBlur={handlerdetails}
                      name="password"
                      type="password"
                      placeholder="Enter shop email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicShopName">
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control
                      onBlur={handlerdetails}
                      name="shopname"
                      type="text"
                      placeholder="Enter shop name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicaddress">
                    <Form.Label>Shop & Address</Form.Label>
                    <Form.Control
                      onBlur={handlerdetails}
                      name="address"
                      type="text"
                      placeholder="shop address"
                      required
                    />
                  </Form.Group>
                </>
              ) : (
                ""
              )}

              {/* radio button*/}
              <div className="row">
                <div className="col-6">
                  <Form.Group className="mt-3">
                    <Form.Check
                      onClick={handlerfromexpand}
                      label="Do you Want to Open Your Store?"
                    />
                  </Form.Group>
                </div>
                <div className="col-6 text-primary">
                  <Link to="/student">
                    <div className="row  mt-4">
                      <div className="col-6">
                        <p>Are you Student?</p>
                      </div>
                      <div className="col-6">
                         
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <Button
                className="mt-3 login-submit"
                variant="primary"
                type="submit">
                Registration
              </Button>

              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationForm;
