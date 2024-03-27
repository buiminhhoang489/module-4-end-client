import React, { useRef } from "react";
import "./authen.scss";
import { Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function Authen() {
  const containerRef = useRef<any>();
  return (
    <>
      <div ref={containerRef} className="container" id="container">
        <Register containerRef={containerRef}></Register>
        <Login containerRef={containerRef}></Login>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => {
                  containerRef.current.classList.remove("right-panel-active");
                }}
                className="ghost"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => {
                  containerRef.current.classList.add("right-panel-active");
                }}
                className="ghost"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
