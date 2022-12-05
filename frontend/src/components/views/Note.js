import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios";

const Note = (props) => {
  const handleDelete = () => {
    console.log(props.note.id);
    axios
      .delete(`/api/${props.note.id}`)
      .then(() => console.log("Delete successful"));
    props.consultApi();
  };

  const handleArchive = () => {
    let arch;
    if (props.note.archived === false) {
      arch = true;
    } else {
      arch = false;
    }

    axios
      .put(`/api/${props.note.id}`, {
        title: props.note.title,
        content: props.note.content,
        archived: arch,
      })
      .then(() => console.log("Archived successful"));
    props.consultApi();
  };

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.note.title}</Card.Title>
          <Card.Text>{props.note.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end w-100">
          <Button className="btn btn-secondary" onClick={handleArchive}>
            <FontAwesomeIcon icon={faArchive} />
          </Button>
          <Link
            className="btn btn-primary mx-2"
            to={`/api/editNote/${props.note.id}`}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <Button onClick={handleDelete} className="btn btn-danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Note;
