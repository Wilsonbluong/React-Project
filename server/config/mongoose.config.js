const mongoose = require("mongoose");

// export an arrow func so that our server.js can control
// the db name
module.exports = (db_name) => {
  mongoose
    .connect("mongodb://localhost/destinations", {
      // these are passed in to avoid error warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Established a connection to destinations db"))
    .catch((err) =>
      console.log(
        "Something went wrong when connecting to the destinations db",
        err
      )
    );
};
