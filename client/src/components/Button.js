import React from "react";
import { Link } from "@reach/router";

import "./Button.css";

const Button = () => {
  return (
    <Link to="/sign-up">
      <button className="btn">Sign Up</button>
    </Link>
  );
};

export default Button;
