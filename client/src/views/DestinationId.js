import React, { useState, useEffect } from "react";

import axios from "axios";
import Footer from "../components/Footer";
import DestinationInfo from "../components/DestinationInfo";

const DestinationId = (props) => {
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/destinations/" + props.id)
      .then((res) => {
        //console.log(res)
        setDestination(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.id]);

  if (destination === null) {
    return "Loading....";
  }

  return (
    <div className="" key={destination._id}>
      <img
        src={destination.src}
        alt={destination.destination}
        style={{ width: "100vw", height: "100vh" }}
      />
      <div style={{ position: "relative", marginTop: "-40%" }}>
        <h1 className="destinationId">{destination.destination}</h1>
      </div>
      <DestinationInfo />
      <Footer />
    </div>
  );
};

export default DestinationId;
