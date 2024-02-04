const Points = require("../models/points");
const Match = require("../models/matches");

exports.getPointsTableData = async (req, res, next) => {
  try {
    const doc = await Points.find();
    if (!doc) {
      return res.status(404).json({ msg: "Could not fetch data" });
    }
    const data = JSON.stringify(doc);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.getMatchesData = async (req, res, next) => {
  try {
    const doc = await Match.find();
    if (!doc) {
      return res.status(404).json({ msg: "Could not fetch data" });
    }
    const data = JSON.stringify(doc);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.postTableData = async (req, res, next) => {
  try {
    for (let point of pointsTable) {
      const data = new Points({
        _id: point._id,
        teamName: point.teamName,
        team: point.team,
        played: point.played,
        won: point.won,
        lost: point.lost,
        nr: point.nr,
        nrr: point.nrr,
        points: point.points,
      });
      await data.save();
    }
    res.status(200);
    // res.send(JSON.stringify(respo));
  } catch (err) {
    console.log(err);
  }
};
exports.postMatchData = async (req, res, next) => {
  res.status(200).send({ msg: "SUCCESS" });
};
