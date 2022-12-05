import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { findErrors } from "./helper";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [note, setNote] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [errors, setErrors] = useState({});
  const navegation = useNavigate();
  const setAttribute = (attribute, value) => {
    setNote({
      ...note,
      [attribute]: value,
    });

    if (!!errors[attribute])
      setErrors({
        ...errors,
        [attribute]: null,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note.title === undefined) {
      note.title = "";
    }

    if (note.content === undefined) {
      note.content = "";
    }
    const newErrors = findErrors(note);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(true);
      setErrors(newErrors);
      return;
    }
    setErrorMsg(false);

    try {
      axios
        .post("/api/newNote", {
          title: note.title,
          content: note.content,
          archived: false,
        })
        .then(() => console.log("Creation successful"));
      navegation("/api");
    } catch (error) {
      console.log(error);
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
            onChange={(e) => setAttribute("title", e.target.value)}
            isInvalid={!!errors.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="noteContent">
          <Form.Label>Content *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setAttribute("content", e.target.value)}
            isInvalid={!!errors.content}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Save
        </Button>
      </Form>
      {errorMsg ? (
        <Alert variant="danger" className="mt-3">
          Please verify. Title must be between 5 and 30 characters long, and content between 5 and 100 characters long.
        </Alert>
      ) : null}
    </section>
  );
};

export default CreateNote;