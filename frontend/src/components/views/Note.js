import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";

const Note = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end w-100">
          <Link className="btn btn-secondary">
            <FontAwesomeIcon icon={faArchive} />
          </Link>
          <Link className="btn btn-primary mx-2">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <Link
            // to={``}
            className="btn btn-danger"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Note;
