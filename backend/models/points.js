const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pointSchema = new Schema({
  _id: {
    type: Number,
  },
  teamName: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  played: {
    type: Number,
  },
  won: {
    type: Number,
  },
  lost: {
    type: Number,
  },
  nr: {
    type: Number,
  },
  points: {
    type: Number,
  },
  nrr: {
    type: String,
  },
});

module.exports = mongoose.model("Point", pointSchema);
