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
import Swal from "sweetalert2";

const Note = (props) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Do you want to delete this note?",
      text: "You can't retrieve it later",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(`/api/${props.note.id}`)
            .then(() => console.log("Delete successful"));
          props.consultApi();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Try it later",
          });
        }
      }
    });
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
