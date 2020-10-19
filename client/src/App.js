import React from "react";
import "./App.css";

import { Router } from "@reach/router";

import Navbar from "./components/Navbar";
import TravelStories from "./views/TravelStories";
import Book from "./views/Book";
import PopularTrips from "./views/PopularTrips";
import Destinations from "./views/Destinations";
import Services from "./views/Services";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import TravelHacks from "./views/TravelHacks";
import Deals from "./views/Deals";
import NotFound from "./views/NotFound";
import DestinationId from "./views/DestinationId";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <TravelStories path="/travel-stories" />
        <Book path="/book" />
        <Destinations path="/destinations" />
        <DestinationId path="/destinations/:id" />
        <PopularTrips path="/popular-trips" />
        <Services path="/services" />
        <SignUp path="/sign-up" />
        <TravelHacks path="/travel-hacks" />
        <Deals path="/deals" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
