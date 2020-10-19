import React, { useState, useEffect } from "react";
import axios from "axios";

import { navigate } from "@reach/router";

import "./DestinationInfo.css";

const DestinationInfo = (props) => {
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

  function handleDelete() {
    axios
      .delete("http://localhost:8000/api/destinations/" + props.id)
      .then((res) => {
        navigate("/destinations");
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <div>
      <h1> What to expect:</h1>
      <h2>
        Host: {destination.firstName} {destination.lastName}
      </h2>
      <h2>Group Size: {destination.groupSize}</h2>
      <h2>Description: {destination.desc}</h2>
      <button
        onClick={(event) => {
          handleDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DestinationInfo;
