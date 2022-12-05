import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { findErrors } from "./helper";
import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [errors, setErrors] = useState({});
  const navegation = useNavigate();

  useEffect(() => {
    consultAPI();
  }, []);

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

  const consultAPI = () => {
    try {
      axios.get(`api/editNote/${id}`).then((res) => {
        setNote(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(note);
    const newErrors = findErrors(note);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(true);
      setErrors(newErrors);
      return;
    }
    setErrorMsg(false);

    try {
      axios
        .put(`http://localhost:3001/api/editNote/${id}`, {
          title: note.title,
          content: note.content,
          archived: note.archived,
        })
        .then(() => console.log("Edited successfully"));
      navegation("/api/archive");
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
            defaultValue={note.title}
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
            defaultValue={note.content}
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
          Please verify.
        </Alert>
      ) : null}
    </section>
  );
};

export default EditNote;
