import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";

function Home(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/clown1.jpg"}
            alt="First slide"
          />
          <Carousel.Caption className={styles.caption}>
            <h3>Charlie Chaplin</h3>
            <p>
              "I remain just one thing, and one thing only - and that is a
              clown. It places me on a far higher plane than any politician."
            </p>
            <Button variant="outline-light"><Link to="/jokes" style={{textDecoration:'none', color:'white'}}>For More Jokes</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/clown2.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption className={styles.caption}>
            <h3>Joker</h3>
            <p>
              “I used to think my life was a tragedy, but now I realize it’s a
              comedy.”{" "}
            </p>
            <Button variant="outline-light"><Link to="/jokes" style={{textDecoration:'none', color:'white'}}>For More Jokes</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={"/images/joker2.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption className={styles.caption}>
            <h3>Norm MacDonald</h3>
            <p>
              Comedy is surprises, so if you're intending to make somebody laugh
              and they don't laugh, that's funny.
            </p>
            <Button variant="outline-light"><Link to="/jokes" style={{textDecoration:'none', color:'white'}}>For More Jokes</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
