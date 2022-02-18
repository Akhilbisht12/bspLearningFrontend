import React from "react";
import { Link } from "react-router-dom";
import logoBhim from "../assets/Images/bhim.png";
const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center min100vh">
      <div
        className="d-flex flex-column align-items-center justify-content-between"
        style={{ fontFamily: "Gilroy" }}
      >
        <img className="w-25 my-2" src={logoBhim} />
        <h3 className="my-3 text-bolder"> BHIM BATA</h3>
        <Link className="sitebtnInv my-2" to="/">
          Login
        </Link>
        <Link className="sitebtnInv my-2" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
