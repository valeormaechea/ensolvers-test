import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { textLength } from "./helper";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate inputs
    if (textLength(title, 2, 20) && textLength(content, 5, 100)) {
      setErrorMsg(false);
    }
    else{
        setErrorMsg(true);
    }
  };

  return (
    <section className="container">
      <h3 className="mt-5">New note</h3>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="noteTitle">
          <Form.Label>Title *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Homework"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="noteContent">
          <Form.Label>Content *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Save
        </Button>
      </Form>
      {errorMsg ? (
        <Alert variant="danger" className="mt-3">
          Please verify.
        </Alert>
      ) : null}
    </section>
  );
};

export default CreateNote;
