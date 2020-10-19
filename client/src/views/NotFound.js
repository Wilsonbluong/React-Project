import React from "react";
import Footer from "../components/Footer";

const NotFound = (props) => {
  console.log(props);
  return (
    <div className="notFound">
      <h1>Page not found.</h1>
      <Footer />
    </div>
  );
};

export default NotFound;
