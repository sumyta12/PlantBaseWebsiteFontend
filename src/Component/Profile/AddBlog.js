import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SharedData from "./SharedData";
import Card from "react-bootstrap/Card";
const AddBlog = () => {
  const { user } = SharedData();
  const [details, setdetails] = useState({});
  function handlerdetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { ...details, email: user?.email, type: user.type };
    newValue[name] = value;
    setdetails(newValue);
  }

  function handlersubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/plantblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("blog is uploded successfully");
        }
      });
  }

  return (
    <div>
      <Container>
      <Card border="danger" style={{ width: "100%" }}>
        <Row className="p-3">
          <Col lg={6} md={6} sm={12}>
            <Form className="login-form" onSubmit={handlersubmit}>
              <h2 className="login-text"> Add Blogs For User Engage</h2>
              <div className="row">
                <div className="col-6">
                  <Form.Group controlId="formBasicTile">
                    <Form.Label>Tile of Blogs</Form.Label>
                    <Form.Control
                      onBlur={handlerdetails}
                      name="title"
                      type="text"
                      placeholder="Enter Blog Title"
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="formBasicTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      onBlur={handlerdetails}
                      name="time"
                      type="time"
                      required
                    />
                  </Form.Group>
                </div>
              </div>

              <Form.Group controlId="formBasicLink">
                <Form.Label>Additional Link</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="urlink"
                  type="text"
                  placeholder="Enter Link to learn more"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Brief About Description</Form.Label>
                <Form.Control
                  onBlur={handlerdetails}
                  name="description"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Button
                className="mt-3 login-submit"
                variant="primary"
                type="submit">
                Add Blogs for User
              </Button>

              <br />
            </Form>
          </Col>
        </Row>
        </Card>
      </Container>
    </div>
  );
};

export default AddBlog;
