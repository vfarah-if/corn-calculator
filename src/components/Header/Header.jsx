import React from "react";
import PropTypes from "prop-types";

import "./style/index.css";
const DEFAULTURL = process.env.PUBLIC_URL + "/farm.jpg";

const Header = ({ title, imageUrl = DEFAULTURL }) => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};

Header.prototypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Header;
