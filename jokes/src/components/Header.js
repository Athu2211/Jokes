import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <Navbar className={styles.header}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className={styles.brand}>
            <img
              alt=""
              src="/images/clownhat.png"
              width="60"
              height="55"
              className="d-inline-block align-top"
            />
            Clown
          </Link>
        </Navbar.Brand>
        <Nav.Link >
          <Link to="/jokes" className={styles.link}>Jokes</Link>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
