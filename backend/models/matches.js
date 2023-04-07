const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  stadium: {
    type: String,
  },
  date: {
    type: String,
  },
  day: {
    type: String,
  },
  time: {
    type: String,
  },
  homeTeamName: {
    type: String,
  },
  homeTeamAbr: {
    type: String,
  },
  homeTeamScore: {
    type: String,
  },
  awayTeamName: {
    type: String,
  },
  awayTeamAbr: {
    type: String,
  },
  awayTeamScore: {
    type: String,
  },
  isHomeBattingFirst: {
    type: Boolean,
  },
  winner: {
    type: String,
  },
  wonByMargin: {
    type: String,
  },
});

module.exports = mongoose.model("Matche", matchSchema);
