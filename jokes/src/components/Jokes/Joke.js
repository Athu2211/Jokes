import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import JokesModal from "./JokesModal";
import { useHistory, Link } from 'react-router-dom';
import styles from "./Joke.module.css";

function Joke({ jokes }) {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()

  const handleShowModal = (id) => {
    setShowModal(true);
  }
  return (
    <>
      <Container>
        <Row>
          {jokes.map(joke => (
            <Col xs={6} md={4} lg={3}>
              <Link to={`/goodJokes/${joke.id}`} style={{cursor:'pointer', textDecoration:'none'}} onClick={handleShowModal}>
              <Card className={styles.outer}>
                <Card.Body>
                  <Card.Title>{joke.setup}</Card.Title>
                  <Card.Title>{joke.id}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {joke.type}
                  </Card.Subtitle>
                  <Card.Text>{joke.punchline}</Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <JokesModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default Joke;
