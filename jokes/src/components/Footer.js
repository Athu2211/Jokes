import React from "react";
import styles from './Footer.module.css'

function Footer(props) {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fa fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" target="_blank">
            <i className="fa fa-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </li>
      </ul>
      <p>&copy;2022 Athulya</p>
    </div>
  );
}

export default Footer;
