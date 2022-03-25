import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({ jokesPerPage, totalJokes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.outer}>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link onClick={() => paginate(number)} to='/jokes' className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;