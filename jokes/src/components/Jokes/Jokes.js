import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Joke from "./Joke";
import Loading from "../Loading";
import styles from "./Jokes.module.css";

function Jokes(props) {
  const jokes = useSelector(state => state.jokes);

  return (
    <div className={styles.bg}>
      {!jokes.length ? (
      <>
        <Loading />
      </>
      ) : (
      <Container>
        <Row>
          {jokes.map(joke => (
            <Col xs={6} md={4} lg={3}>
              <Joke joke={joke} />
            </Col>
          ))}
        </Row>
      </Container>
      )}
    </div>
  );
}

export default Jokes;
