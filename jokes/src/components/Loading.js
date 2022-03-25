import React from "react";
import { Spinner } from "react-bootstrap";

function Loading(props) {
  return (
    <div>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  );
}

export default Loading;
