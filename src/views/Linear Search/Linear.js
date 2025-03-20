import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";

const LinearSearchVisualizer = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState("");
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState(null);

  const handleArrayChange = (e) => {
    setArray(e.target.value.split(",").map(Number));
  };

  const handleTargetChange = (e) => {
    setTarget(Number(e.target.value));
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:5000/linearsearch", {
        array,
        target,
      });
      setSteps(response.data.steps);
      setResult(response.data.result);
    } catch (error) {
      console.error("Error making API request", error);
    }
  };

  
  const renderSteps = () => {
    return steps.map((step, index) => (
      <div key={index} style={{ marginBottom: "10px" }}>
        <strong>Step {index + 1}:</strong>
        <div style={{ display: "flex", alignItems: "center" }}>
          {step.array.map((value, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-block",
                padding: "10px",
                margin: "0 5px",
                border:
                  idx === step.current_index
                    ? "2px solid #5c727d"
                    : "1px solid #000",
                backgroundColor:
                  idx === step.current_index ? "#5c727d" : "#fff",
                color: idx === step.current_index ? "#fff" : "#000",
                borderRadius: "5px",
                minWidth: "30px",
                textAlign: "center",
              }}
            >
              {value}
            </div>
          ))}
        </div>
        <p>
          Current Index: {step.current_index}, Value:{" "}
          {step.array[step.current_index]}, Target Found:{" "}
          {step.is_found ? "Yes" : "No"}
        </p>
      </div>
    ));
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1>Linear Search Algorithm</h1>
        <Form>
          <Form.Group>
            <Row className="g-3">
              <Col md={6}>
                <Form.Label>Array (comma separated values):</Form.Label>
                <Form.Control type="text" onChange={handleArrayChange} />
              </Col>
              <Col md={6}>
                <Form.Label>Target Value:</Form.Label>
                <Form.Control type="number" onChange={handleTargetChange} />
              </Col>
              <Col md={12} style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button className="btn btn-secondary" onClick={handleSearch}>Start Search</Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <div style={{ marginTop: "20px" }}>
          {result !== null && (
            <h3>
              Result: Target{" "}
              {result === -1 ? "not found" : `found at index ${result}`}
            </h3>
          )}
          <div style={{ marginTop: "20px" }}>{renderSteps()}</div>
        </div>
      </Container>
    </>
  );
};

export default LinearSearchVisualizer;
