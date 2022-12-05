import { React, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Note from "./Note";
import axios from "../../axios";

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    consultApi();
  }, []);

  const consultApi = () => {
    try {
      axios.get("/api").then((res) => {
        setNotes(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container">
      <section className="mt-4">
        <h3>My notes</h3>
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

export default Home;
