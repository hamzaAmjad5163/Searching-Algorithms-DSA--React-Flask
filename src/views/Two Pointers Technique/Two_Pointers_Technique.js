import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";

const TwoPointersVisualizer = () => {
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
      const response = await axios.post("http://localhost:5004/twopointers", {
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
      <div key={index} style={{ marginBottom: "20px" }}>
        <strong>Step {index + 1}:</strong>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {step.array.map((value, idx) => (
            <div key={idx} style={{ margin: "0 5px", textAlign: "center" }}>
              <div style={{ fontWeight: "bold" }}>
                {idx === step.left ? "Left" : idx === step.right ? "Right" : ""}
              </div>
              <div
                style={{
                  padding: "10px",
                  backgroundColor:
                    idx === step.left
                      ? "#5c727d" // Blue for left
                      : idx === step.right
                      ? "#ff6f61" // Orange for right
                      : "#d3d3d3", // Grey for normal
                  color:
                    idx === step.left || idx === step.right ? "#fff" : "#000",
                  border:
                    idx === step.left || idx === step.right
                      ? "2px solid #000"
                      : "1px solid #ccc",
                  borderRadius: "5px",
                  minWidth: "30px",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
        <p>Current Sum: {step.current_sum}</p>
      </div>
    ));
  };

  
  return (
    <>
      <Navbar />
      <Container>
        <h1>Two Pointers Visualizer</h1>
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
              <Col md={12} className="d-flex justify-content-center">
                <Button className="btn btn-secondary" onClick={handleSearch}>
                  Start Search
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <div style={{ marginTop: "20px" }}>
          {result !== null && (
            <h3>Result: {result ? "Pair found" : "No pair found"}</h3>
          )}
          <div style={{ marginTop: "20px" }}>{renderSteps()}</div>
        </div>
      </Container>
    </>
  );
};

export default TwoPointersVisualizer;
