import React, { useState } from "react";
import { useSelector } from "react-redux";
import Joke from "./Joke";
import Loading from "../Loading";
import styles from "./Jokes.module.css";
import Pagination from "../Pagination";
import { Container } from "react-bootstrap";

function Jokes(props) {
  const jokes = useSelector(state => state.jokes);
  const [currentPage, setCurrentPage] = useState(1);
  const [jokesPerPage] = useState(20);

  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
  const currentJokes = jokes.slice(indexOfFirstJoke, indexOfLastJoke);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <div className={styles.bg}>
      {!jokes.length ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Joke jokes={currentJokes} />
          <Pagination
            jokesPerPage={jokesPerPage}
            totalJokes={jokes.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
    </>
  );
}

export default Jokes;
