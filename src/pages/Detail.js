import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function Deatail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://notflixtv.herokuapp.com/api/v1/movies/" + id)
      .then((Response) => Response.json())
      .then((results) => setMovie(results.data));
  }, []);
  return (
    <div>
      <NavigationBar />
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            background: "white",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,.5)",
            }}
          ></div>
          <div
            className="example"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              background: `url('https://image.tmdb.org/t/p/w500${movie.poster}')`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
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
              {movie.title}
            </h1>
            <h4
              style={{
                color: "white",
                fontSize: "18px",
                marginTop: "15px",
                marginBottom: "30px",
              }}
            >
              {movie.genres}
            </h4>
            <p style={{ color: "white", fontSize: "18px", marginTop: "15px" }}>
              {movie.synopsis}
            </p>
            <h5 style={{ color: "white", fontSize: "18px", marginTop: "15px" }}>
              {(movie.rating / 2).toFixed(1)}
              /5
            </h5>
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
        </div>
        <div style={{ background: "#f1f5f9" }}>
          <footer>
            <div>
              <ul>
                <li>
                  <a href="#">Conditions of Use</a>
                </li>
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#">Press Room</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Connect with us</p>
              <ul>
                <li>
                  <a href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 1.66663H12.5C11.395 1.66663 10.3352 2.10561 9.55376 2.88701C8.77236 3.66842 8.33337 4.72822 8.33337 5.83329V8.33329H5.83337V11.6666H8.33337V18.3333H11.6667V11.6666H14.1667L15 8.33329H11.6667V5.83329C11.6667 5.61228 11.7545 5.40032 11.9108 5.24404C12.0671 5.08776 12.279 4.99996 12.5 4.99996H15V1.66663Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                      <path
                        d="M20.1666 7.66663H11.8333C9.53211 7.66663 7.66663 9.53211 7.66663 11.8333V20.1666C7.66663 22.4678 9.53211 24.3333 11.8333 24.3333H20.1666C22.4678 24.3333 24.3333 22.4678 24.3333 20.1666V11.8333C24.3333 9.53211 22.4678 7.66663 20.1666 7.66663Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.3334 15.475C19.4362 16.1685 19.3178 16.8769 18.9948 17.4992C18.6719 18.1215 18.161 18.6262 17.5347 18.9414C16.9085 19.2566 16.1987 19.3663 15.5065 19.2549C14.8143 19.1436 14.1748 18.8167 13.6791 18.321C13.1833 17.8252 12.8565 17.1857 12.7451 16.4935C12.6337 15.8013 12.7434 15.0916 13.0586 14.4653C13.3739 13.8391 13.8785 13.3281 14.5009 13.0052C15.1232 12.6823 15.8315 12.5638 16.525 12.6667C17.2325 12.7716 17.8874 13.1012 18.3931 13.6069C18.8988 14.1126 19.2285 14.7676 19.3334 15.475Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.5834 11.4166H20.5917"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                      <path
                        d="M25.1667 8.49996C24.3687 9.06285 23.4851 9.49338 22.55 9.77496C22.0482 9.19788 21.3812 8.78887 20.6392 8.60323C19.8973 8.41759 19.1163 8.46429 18.4018 8.737C17.6873 9.00972 17.0737 9.49529 16.6442 10.1281C16.2146 10.7608 15.9898 11.5102 16 12.275V13.1083C14.5356 13.1463 13.0844 12.8215 11.7759 12.1628C10.4673 11.5042 9.34197 10.5322 8.50004 9.33329C8.50004 9.33329 5.16671 16.8333 12.6667 20.1666C10.9505 21.3316 8.906 21.9157 6.83337 21.8333C14.3334 26 23.5 21.8333 23.5 12.25C23.4993 12.0178 23.477 11.7863 23.4334 11.5583C24.2839 10.7195 24.8841 9.66055 25.1667 8.49996V8.49996Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                      <path
                        d="M9.33329 9.33337H22.6666C23.5833 9.33337 24.3333 10.0834 24.3333 11V21C24.3333 21.9167 23.5833 22.6667 22.6666 22.6667H9.33329C8.41663 22.6667 7.66663 21.9167 7.66663 21V11C7.66663 10.0834 8.41663 9.33337 9.33329 9.33337Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.3333 11L16 16.8333L7.66663 11"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                      <path
                        d="M19.3333 15.1666V11.8333M23.5 7.66663H8.5V21H12.6667V24.3333L16 21H20.1667L23.5 17.6666V7.66663ZM15.1667 15.1666V11.8333V15.1666Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>© 2021 MovieBox. All Right Reserved.</p>
              <div></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Deatail;
