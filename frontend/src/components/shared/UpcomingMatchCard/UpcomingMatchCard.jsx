import React from "react";
import "./UpcomingMatchCard.css";

const UpcomingMatchCard = () => {
  const date = "16-04-2023";
  const homeTeamName = "Mumbai Indians";
  const homeTeamAbr = "MI";
  const awayTeamName = "Chennai super Kings";
  const awayTeamAbr = "CSK";
  const stadium = "Wankhede, Mumbai";
  const _id = 22;

  const logo1 = `./src/assets/${homeTeamAbr}.jpg`;
  const logo2 = `./src/assets/${awayTeamAbr}.jpg`;
  return <div className="upcoming-card-container"></div>;
};

export default UpcomingMatchCard;
