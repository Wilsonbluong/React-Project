import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "@reach/router";

import "./AllDestinations.css";

const AllDestinations = (props) => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/destinations")
      .then((res) => {
        //console.log(res)
        // res.data grabs the necessary data from the response
        setDestinations(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (destinations === null) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Join One of These Epic Excursions.</h1>
      {destinations.map((destination) => {
        return (
          <div className="card-row" key={destination._id}>
            <div className="card-item">
              <Link to={`/destinations/${destination._id}`}>
                <img
                  className="cards_item_img"
                  src={destination.src}
                  alt={destination.destination}
                />
                <div>
                  <h5 className="cards_item_text">{destination.destination}</h5>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllDestinations;
