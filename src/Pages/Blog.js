import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import EachShop from "../Component/Shop/EachShop";
import Form from "react-bootstrap/Form";
const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let set = false;
    if (!set) {
      fetch(`/blogs.json`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    return () => {
      set = true;
    };
  }, []);
  return (
    <div className="blogsection">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            {data.map((datas, index) => (
              <EachShop shopdata={datas} key={index}></EachShop>
            ))}
          </div>
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center justify-content-lg-start align-items-center align-items-lg-start">
            <Card border="danger" style={{ width: "18rem" }}>
              <Card.Header>Today Latest News</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form.Group>
                    <Form.Check label="Summer News" />
                  </Form.Group>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
