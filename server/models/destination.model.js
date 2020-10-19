const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: [true, "Destination is required."],
      minlength: [2, "Destination must be at least {MINLENGTH} characters."],
    },
    firstName: {
      type: String,
      required: [true, "First name is required."],
      minlength: [2, "First name must be at least {MINLENGTH} characters."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      minlength: [2, "Last name must be at least {MINLENGTH} characters."],
    },
    groupSize: {
      type: Number,
      required: [true, "Group size is required."],
      min: [0, "Group size must be at least {MIN} at minimum."],
    },
    desc: {
      type: String,
      required: [true, "Description is required."],
      minlength: [3, "Description must be at least {MINLENGTH} characters."],
    },
    src: {
      type: String,
      required: [true, "Image URL is required."],
    },
  },
  { timestamp: true }
);

// register our model and enforce the schema
const Destination = mongoose.model("Destination", DestinationSchema);

module.exports = Destination;
