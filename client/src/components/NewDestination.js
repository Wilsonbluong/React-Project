import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

import "./NewDestination.css";

const NewDestination = (props) => {
  const [destination, setDestination] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [desc, setDesc] = useState("");
  const [src, setSrc] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      destination,
      firstName,
      lastName,
      groupSize,
      desc,
      src,
    };

    console.log(newDestination);

    axios
      // pass in post route and data from newly created city
      .post("http://localhost:8000/api/destinations", newDestination)
      // res = response from server
      .then((res) => {
        console.log(res);
        // redirect back to cities
        navigate("/destinations");
      })
      .catch((err) => {
        // for validation errors to be sent here, the .catch in the
        // controller method needs:
        // res.status(400).json(err);
        setErrors(err.response.data.errors);
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Your trip details</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="">
          <div>
            {errors?.destination && (
              <span className="text-danger">{errors.destination?.message}</span>
            )}
          </div>
          <label htmlFor="destination" className="">
            Destination:
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            className=""
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          />
        </div>

        <div className="">
          <div>
            {errors?.firstName && (
              <span className="text-danger">{errors.firstName?.message}</span>
            )}
          </div>
          <label htmlFor="firstName" className="">
            First Name:
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className=""
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>

        <div className="">
          <div>
            {errors?.lastName && (
              <span className="text-danger">{errors.lastName?.message}</span>
            )}
          </div>
          <label htmlFor="lastName" className="">
            Last Name:
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className=""
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>

        <div className="">
          <div>
            {errors?.groupSize && (
              <span className="text-danger">{errors.groupSize?.message}</span>
            )}
          </div>
          <label htmlFor="groupSize" className="">
            Group Size:
          </label>
          <input
            id="groupSize"
            name="groupSize"
            type="text"
            className=""
            onChange={(e) => {
              setGroupSize(e.target.value);
            }}
          />
        </div>

        <div className="">
          <div>
            {errors?.desc && (
              <span className="text-danger">{errors.desc?.message}</span>
            )}
          </div>
          <label htmlFor="desc" className="">
            Description:
          </label>
          <input
            id="desc"
            name="desc"
            type="text"
            className=""
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <div className="">
          <div>
            {errors?.src && (
              <span className="text-danger">{errors.src?.message}</span>
            )}
          </div>
          <label htmlFor="src" className="">
            Image URL:
          </label>
          <input
            id="src"
            name="src"
            type="text"
            className=""
            onChange={(e) => {
              setSrc(e.target.value);
            }}
          />
        </div>

        <button className="">Create</button>

        <button
          className=""
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewDestination;
