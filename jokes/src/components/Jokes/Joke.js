import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./Joke.module.css";

function Joke({ jokes }) {
  return (
    <Container>
      <Row>
        {jokes.map(joke => (
          <Col xs={6} md={4} lg={3}>
            <Card className={styles.outer}>
              <Card.Body>
                <Card.Title>{joke.setup}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {joke.type}
                </Card.Subtitle>
                <Card.Text>{joke.punchline}</Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Joke;
