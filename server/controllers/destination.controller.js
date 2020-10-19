const Destination = require("../models/destination.model");

// export an object that is full of methods
module.exports = {
  // long form - key: value fomat
  create: function (req, res) {
    console.log("Create method executed");
    // .create is async, we dont know when it will finish so it returns
    // a promise. .then is used to knnow when its fulfilled
    // req.body is the data in the form that was submitted or the data sent from Postman
    Destination.create(req.body)
      // Destination is just a param name, can be named anything
      // this is the newly created Destination that the db returned
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        // so that axios .catch will be triggered for validation errors
        // and other errors
        res.status(400).json(err);
      });
  },

  // GET ALL
  getAll(req, res) {
    console.log("getAll method executed");
    Destination.find()
      .then((destinations) => {
        res.json(destinations);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // GET ONE
  getOne(req, res) {
    console.log("getOne method executed");
    Destination.findById(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // DELETE
  delete(req, res) {
    console.log("delete method executed");
    Destination.findByIdAndDelete(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // UPDATE
  update(req, res) {
    console.log("Update method executed");
    // params: id the object to update, in the body of the form
    Destination.findByIdAndUpdate(req.params.id, req.body, {
      // run validations on update as well
      runValidators: true,
      // return the updated/new object rather than the old info
      new: true,
    })
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
