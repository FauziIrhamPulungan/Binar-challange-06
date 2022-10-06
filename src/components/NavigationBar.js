import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = useState("");
  const { name } = useParams();

  useEffect(() => {
    if (name) setsearchInput(name);
  }, [name]);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "20",
      }}
    >
      <Navbar>
        <div
          className="d-flex justify-content-between"
          style={{ width: "95%", height: "40px", marginLeft: "30px" }}
        >
          <Navbar.Brand href="/" style={{ width: "200px", marginTop: "10px" }}>
            <img
              alt=""
              src="https://movielist-react-app.netlify.app/static/media/Logo.eeba5c17ddf85f2145e83dd963662921.svg"
            />
          </Navbar.Brand>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/search/" + searchInput);
            }}
          >
            <input
              value={searchInput}
              onChange={(event) => {
                setsearchInput(event.target.value);
              }}
              className="search hover-overlay"
              placeholder="what do you want to watch?"
              style={{
                color: "white",
                border: "1px solid white",
                outline: "none",
                borderRadius: "100px",
                width: "400px",
                height: "40px",
                marginTop: "10px",
                padding: "20px",
                background: "transparent",
              }}
            />
            <img
              src="/icons/magnifying-glass-solid.svg"
              style={{
                position: "relative",
                right: "40px",
                width: "15px",
              }}
              alt="icon"
            />
          </form>

          <Nav style={{ gap: "1rem", width: "200px", marginTop: "10px" }}>
            <Button
              className="bg-transparent"
              style={{
                borderColor: "red",
                color: "red",
                borderRadius: "50px",
                width: "100px",
                height: "40px",
              }}
            >
              Login
            </Button>
            <Button
              className=" bg-danger"
              style={{
                border: "10px",
                borderRadius: "30px",
                width: "100px",
                height: "40px",
              }}
            >
              Register
            </Button>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
