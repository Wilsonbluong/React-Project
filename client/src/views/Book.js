import React from "react";
import NewDestination from "../components/NewDestination";
import Footer from "../components/Footer";

const Book = () => {
  return (
    <div>
      <h1 className="book">WHERE ARE YOU FLYING TO?</h1>
      <NewDestination />
      <Footer />
    </div>
  );
};

export default Book;
