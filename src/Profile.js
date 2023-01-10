import Header from "./Header";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function Profile() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const [descripcion, setDescripcion] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setDescripcion(event.target.value);
  };

  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8081/Usuario") //Fetch por defecto hace un GET.
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDescripcion(data.description);
      });
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const EnviarDatos = (event) => {
    event.preventDefault();
    fetch("http://localhost:8081/Edit", {
      method: "POST",
      body: descripcion,
    }).then((response) => {
      if (response.ok) {
        setData({ ...data, description: descripcion });
      }
    });
  };

  return (
    <div className="profile">
      <div>
        <Header></Header>
        <Card style={{ width: "450px" }}>
          <Card.Img variant="top" src="./logo512.png" />
          <Card.Body>
            <Card.Title>{data.admin}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Button variant="primary" href="/Home">
              Go back to the timeline
            </Button>
            <p></p>
            <Row>
              <Col>
                <Button onClick={toggleShowA} id="BotonDescripcion">
                  Edit Profile Description
                </Button>
                <p></p>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <strong className="me-auto">Edit Profile</strong>
                  </Toast.Header>
                  <Toast.Body>
                    <input type="text" onChange={handleInputChange}></input>
                    <Button variant="success" onClick={EnviarDatos}>
                      Change description
                    </Button>
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
