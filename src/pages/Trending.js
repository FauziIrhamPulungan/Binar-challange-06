import React from "react";

import { Nav } from "react-bootstrap";

function Trending() {
  return (
    <div className="d-flex justify-content-between">
      <h1 style={{ marginTop: "90px", marginLeft: "30px" }}>Popular Movie</h1>
      <div className="d-flex justify-content-between">
        <Nav.Link
          href="/All"
          style={{ marginTop: "90px", marginRight: "60px", color: "red" }}
        >
          See All Movie
        </Nav.Link>
        <img
          alt="icon"
          src="/icons/arrow-right-solid.svg"
          style={{
            position: "relative",
            right: "50px",
            width: "20px",
            marginTop: "60px",
          }}
        />
      </div>
    </div>
  );
}

export default Trending;
