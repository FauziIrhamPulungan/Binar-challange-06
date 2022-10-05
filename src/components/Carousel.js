import Carousel from "react-bootstrap/Carousel";
import img from "../assets/image/strange.jpg";
import NavigationBar from "./NavigationBar";

function CarouselNavbar() {
  return (
    <div style={{ position: "relative" }}>
      <NavigationBar />
      <Carousel fade controls={false} interval={2000}>
        <Carousel.Item>
          <div style={{ position: "relative", height: "100vh" }}>
            <div
              style={{
                position: "absolute",
                left: "40px",
                top: "190px",
                zIndex: "20",
                width: "600px",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "61px",
                  fontWeight: "600",
                }}
              >
                Doctor Strange in the Multiverse of Madness
              </h1>
              <p
                style={{ color: "white", fontSize: "18px", marginTop: "15px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className=" bg-danger"
                style={{
                  marginTop: "15px",
                  color: "white",
                  border: "50px",
                  borderRadius: "500px",
                  width: "170px",
                  height: "40px",
                  fontWeight: "700",
                }}
              >
                Watch Trailer
              </button>
              <img
                alt=""
                src="/icons/circle-play-regular.svg"
                style={{ position: "relative", right: "160px", width: "15px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
              }}
            ></div>
            <img className="d-block w-100" src={img} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", height: "100vh" }}>
            <div
              style={{
                position: "absolute",
                left: "40px",
                top: "190px",
                zIndex: "20",
                width: "600px",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "61px",
                  fontWeight: "600",
                  marginTop: "70px",
                }}
              >
                Moon Knight
              </h1>
              <p
                style={{ color: "white", fontSize: "18px", marginTop: "15px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className=" bg-danger"
                style={{
                  marginTop: "15px",
                  color: "white",
                  border: "50px",
                  borderRadius: "500px",
                  width: "170px",
                  height: "40px",
                  fontWeight: "700",
                }}
              >
                Watch Trailer
              </button>
              <img
                alt=""
                src="/icons/circle-play-regular.svg"
                style={{ position: "relative", right: "160px", width: "15px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
              }}
            ></div>
            <img
              className="d-block w-100"
              src={"https://static.filmvandaag.nl/news/8897/moon-knight.jpg"}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", height: "100vh" }}>
            <div>
              <div
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "190px",
                  zIndex: "20",
                  width: "600px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "61px",
                    fontWeight: "600",
                  }}
                >
                  Jurassic World Dominion
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "15px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  className=" bg-danger"
                  style={{
                    marginTop: "15px",
                    color: "white",
                    border: "50px",
                    borderRadius: "500px",
                    width: "170px",
                    height: "40px",
                    fontWeight: "700",
                  }}
                >
                  Watch Trailer
                </button>
                <img
                  alt=""
                  src="/icons/circle-play-regular.svg"
                  style={{
                    position: "relative",
                    right: "160px",
                    width: "15px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
              }}
            ></div>
            <img
              className="d-block w-100"
              src={
                "https://www.entupantalla.com/wp-content/uploads/2022/04/JWDominion.jpg"
              }
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselNavbar;
