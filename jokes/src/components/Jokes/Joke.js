import React from "react";
import { Card } from "react-bootstrap";
import styles from './Joke.module.css'

function Joke({ joke }) {
  return (
    <Card className={styles.outer}>
      <Card.Body>
        <Card.Title>{joke.setup}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{joke.type}</Card.Subtitle>
        <Card.Text>{joke.punchline}</Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Joke;
