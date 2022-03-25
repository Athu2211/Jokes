import React from "react";
import { Container, Carousel } from "react-bootstrap";
// import clown1 from '../images/clown1.jpg';
// import clown2 from '../images/clown2.jpg';
// import joker2 from '../images/joker2.jpg';
import styles from './Home.module.css';

function Home(props) {
  return (
    <Container>
      <Carousel >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={'/images/clown1.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={'/images/clown2.jpg'}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-100"
            src={'/images/joker2.jpg'}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
