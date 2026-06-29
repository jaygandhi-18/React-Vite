import React from "react";

function LoadingSpinner() {
  return (
    <center className="spinner">
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
}

export default LoadingSpinner;
