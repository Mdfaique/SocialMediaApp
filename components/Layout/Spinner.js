import React from "react";

export const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center m-3">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
