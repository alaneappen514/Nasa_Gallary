import React from "react";
import spaceLogo from "../containers/image/logo.jpg";

const Header = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        <img
          style={{ width: "15%", borderRadius: "60%" }}
          src={spaceLogo}
          alt="space logo"
        />
        <div className="mx-5">
          <h1>Mars</h1>
          <p>Brought to you by NASA API</p>
          <a
            href="https://mars.nasa.gov/msl/home/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about Curiosity.
          </a>
        </div>
      </div>
      <div>
        <hr style={{ width: "100%", marginTop: "40px" }} />
      </div>
    </div>
  );
};

export default Header;
