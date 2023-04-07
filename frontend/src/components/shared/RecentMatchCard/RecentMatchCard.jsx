import React from "react";
import "./RecentMatchCard.css";

const RecentMatchCard = ({
  team1,
  team2,
  score1,
  score2,
  winner,
  logo1,
  logo2,
  result,
}) => {
  const image1 = `./src/assets/${logo1}.jpg`;
  const image2 = `./src/assets/${logo2}.jpg`;
  return (
    <div className="card-container">
      <div className="left-content">
        <div className="team-content">
          <div className="team-content__text1">
            <img src={image1}></img>
            <p>{team1}</p>
          </div>
          <div className="team-content__text2">
            <p>{score1}</p>
          </div>
        </div>
        <div className="team-content">
          <div className="team-content__text1">
            <img src={image2}></img>
            <p>{team2}</p>
          </div>
          <div className="team-content__text2">
            <p>{score2}</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <span>
          <p>{winner}</p>
        </span>
        <span>
          <p>Won By</p>
        </span>
        <span>
          <p>{result}</p>
        </span>
      </div>
    </div>
  );
};

export default RecentMatchCard;
