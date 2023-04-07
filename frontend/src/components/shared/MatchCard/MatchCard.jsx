import React from "react";
import "./MatchCard.css";
import MI from "../../../assets/main-logos/MI.png";

const MatchCard = ({ match }) => {
  return (
    <div className="match-card-container" key={match.homeTeamName}>
      <div className="match-card-upper">
        <div className="team-box">
          <img src={`./src/assets/main-logos/${match.homeTeamAbr}.png`}></img>
          <p>{match.homeTeamAbr}</p>
        </div>
        <div className="vs">vs</div>
        <div className="team-box">
          <img src={`./src/assets/main-logos/${match.awayTeamAbr}.png`}></img>
          <p>{match.awayTeamAbr}</p>
        </div>
      </div>
      <div className="match-card-lower">
        <p>{match.time}</p>
        <p>{match.stadium}</p>
      </div>
    </div>
  );
};

export default MatchCard;
