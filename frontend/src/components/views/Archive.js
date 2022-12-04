import { React, useEffect, useState } from "react";
import axios from "../../axios";
import { Row } from "react-bootstrap";
import Note from "./Note";

const Archive = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    consultApi();
  }, []);

  const consultApi = () => {
    try {
      axios.get("/api/archive").then((res) => {
        setNotes(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <main className="container">
      <section className="mt-4">
        <h3>Archived notes</h3>
        <hr />
      </section>
      <section className="mb-4">
        <Row xs={1} md={3} className="g-4">
          {notes.map((note) => (
            <Note note={note} key={note._id} consultApi={consultApi}></Note>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Archive;
