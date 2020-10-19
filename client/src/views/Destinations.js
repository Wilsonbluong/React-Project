import React from "react";
import Footer from "../components/Footer";
import AllDestinations from "../components/AllDestinations";
// import axios from "axios";

// import { Link, navigate } from "@reach/router";

const Destinations = () => {
  return (
    <div>
      <h1 className="destinations">DESTINATIONS</h1>
      <AllDestinations />
      <Footer />
    </div>
  );
};

export default Destinations;
