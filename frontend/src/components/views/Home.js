import React from "react";
import { Row } from "react-bootstrap";
import Note from "./Note";

const Home = () => {
  return (
    <main className="container">
      <section className="mt-4">
        <h3>My notes</h3>
        <hr />
      </section>
      <section className="mb-4">
        <Row xs={1} md={3} className="g-4">
          <Note></Note>
        </Row>
      </section>
    </main>
  );
};

export default Home;
