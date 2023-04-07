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

const matches = [
  {
    stadium: "NM Stadium, Ahmedabad",
    date: "31-03-2023",
    day: "FRI",
    time: "19:30",
    homeTeamName: "Gujarat Titans",
    homeTeamAbr: "GT",
    homeTeamScore: "182-5 (19.2)",
    awayTeamName: "Chennai Super Kings",
    awayTeamAbr: "CSK",
    awayTeamScore: "178-7 (20.0)",
    isHomeBattingFirst: false,
    winner: "Gujarat Titans",
    wonByMargin: "5 Wickets",
  },
  {
    stadium: "ISB Stadium, Mohali",
    date: "01-04-2023",
    day: "SAT",
    time: "15:30",
    homeTeamName: "Punjab Kings",
    homeTeamAbr: "PBKS",
    homeTeamScore: "191-5 (20.0)",
    awayTeamName: "Kolkata Knight Riders",
    awayTeamAbr: "KKR",
    awayTeamScore: "146-7 (16.0)",
    isHomeBattingFirst: true,
    winner: "Punjab Kings",
    wonByMargin: "7 Runs (DLS method)",
  },
  {
    stadium: "Ekana, Lucknow",
    date: "01-04-2023",
    day: "SAT",
    time: "17:30",
    homeTeamName: "Lucknow Super Giants",
    homeTeamAbr: "LSG",
    homeTeamScore: "193-6 (20.0)",
    awayTeamName: "Delhi Capitals",
    awayTeamAbr: "DC",
    awayTeamScore: "143-9 (20.0)",
    isHomeBattingFirst: true,
    winner: "Lucknow Super Giants",
    wonByMargin: "50 Runs",
  },
  {
    stadium: "RGI Stadium, Hyderabad",
    date: "02-04-2023",
    day: "SUN",
    time: "15:30",
    homeTeamName: "Sunrisers Hyderabad",
    homeTeamAbr: "SRH",
    homeTeamScore: "131-8 (20.0)",
    awayTeamName: "Rajasthan Royals",
    awayTeamAbr: "RR",
    awayTeamScore: "203-5 (20.0)",
    isHomeBattingFirst: false,
    winner: "Rajasthan Royals",
    wonByMargin: "72 Runs",
  },
  {
    stadium: "Chinnaswamy, Bangalore",
    date: "02-04-2023",
    day: "SUN",
    time: "17:30",
    homeTeamName: "Royal Challengers Bangalore",
    homeTeamAbr: "RCB",
    homeTeamScore: "172-2 (16.2)",
    awayTeamName: "Mumbai Indians",
    awayTeamAbr: "MI",
    awayTeamScore: "171-7 (20.0)",
    isHomeBattingFirst: false,
    winner: "Royal Challengers Bangalore",
    wonByMargin: "8 Wickets",
  },
  {
    stadium: "Chepauk, Chennai",
    date: "03-04-2023",
    day: "MON",
    time: "17:30",
    homeTeamName: "Chennai Super Kings",
    homeTeamAbr: "CSK",
    homeTeamScore: "217-7 (20.0)",
    awayTeamName: "Lucknow Super Giants",
    awayTeamAbr: "LSG",
    awayTeamScore: "205-7 (20.0)",
    isHomeBattingFirst: true,
    winner: "Chennai Super Kings",
    wonByMargin: "12 Runs",
  },
  {
    stadium: "AJ Stadium, Delhi",
    date: "04-04-2023",
    day: "TUE",
    time: "17:30",
    homeTeamName: "Delhi Capitals",
    homeTeamAbr: "DC",
    homeTeamScore: "162-8 (20.0)",
    awayTeamName: "Gujarat Titans",
    awayTeamAbr: "GT",
    awayTeamScore: "163-4 (18.1)",
    isHomeBattingFirst: true,
    winner: "Gujarat Titans",
    wonByMargin: "6 Wickets",
  },
  {
    stadium: "Barsapara, Guwahati",
    date: "05-04-2023",
    day: "WED",
    time: "17:30",
    homeTeamName: "Rajasthan Royals",
    homeTeamAbr: "RR",
    homeTeamScore: "192-7 (20.0)",
    awayTeamName: "Punjab Kings",
    awayTeamAbr: "PBKS",
    awayTeamScore: "197-4 (20.0)",
    isHomeBattingFirst: false,
    winner: "Punjab Kings",
    wonByMargin: "5 Runs",
  },
  {
    stadium: "Eden Gardens, Kolkata",
    date: "06-04-2023",
    day: "THU",
    time: "17:30",
    homeTeamName: "Kolkata Knight Riders",
    homeTeamAbr: "KKR",
    homeTeamScore: "204-7 (20.0)",
    awayTeamName: "Royal Challengers Bangalore",
    awayTeamAbr: "RCB",
    awayTeamScore: "123 (17.4)",
    isHomeBattingFirst: true,
    winner: "Kolkata Knight Riders",
    wonByMargin: "81 Runs",
  },
];
exports.postMatchData = async (req, res, next) => {
  try {
    let id = 1;
    for (let match of matches) {
      const data = new Match({
        _id: id,
        stadium: match.stadium,
        date: match.date,
        day: match.day,
        time: match.time,
        homeTeamName: match.homeTeamName,
        homeTeamAbr: match.homeTeamAbr,
        homeTeamScore: match.homeTeamScore,
        awayTeamName: match.awayTeamName,
        awayTeamAbr: match.awayTeamAbr,
        awayTeamScore: match.awayTeamScore,
        isHomeBattingFirst: match.isHomeBattingFirst,
        winner: match.winner,
        wonByMargin: match.wonByMargin,
      });
      id++;
      await data.save();
    }
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};
