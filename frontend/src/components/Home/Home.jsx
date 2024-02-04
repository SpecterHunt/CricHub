import React from "react";
import "../../App.css";
import "./Home.css";

import MatchCard from "../shared/MatchCard/MatchCard";
import CapHolderCard from "../shared/CapHolderCard/CapHolderCard";
import PurpleCap from "../../assets/main-logos/pcap2.png";
import OrangeCap from "../../assets/main-logos/ocap2.png";
import RecentMatchCard from "../shared/RecentMatchCard/RecentMatchCard";

const Home = ({ todaysData, recentMatchesData, isFetching }) => {
  return (
    <div className="middle-container">
      <div className="home-top">
        <CapHolderCard
          cap={OrangeCap}
          playerName="Shikhar Dhawan"
          stats="233 Runs"
        />
        <CapHolderCard
          cap={PurpleCap}
          playerName="Yuzvendra Chahal"
          stats="10 Wickets"
        />
      </div>
      <div className="home-bottom">
        <div className="para-wrapper">
          <p>{`Today's Match${todaysData.length > 1 ? "es" : ""}`}</p>
        </div>
        <div className="today-card">
          {!isFetching && todaysData.length == 0 ? (
            <h2>No Matches Today</h2>
          ) : (
            todaysData.map((el) => {
              return <MatchCard match={el} />;
            })
          )}
        </div>
        <div className="para-wrapper">
          <p>Recent</p>
        </div>
        <div className="recent-card">
          {recentMatchesData.map((match) => {
            const team1 = match.isHomeBattingFirst
              ? match.homeTeamName
              : match.awayTeamName;
            const team2 = match.isHomeBattingFirst
              ? match.awayTeamName
              : match.homeTeamName;
            const logo1 = match.isHomeBattingFirst
              ? match.homeTeamAbr
              : match.awayTeamAbr;
            const logo2 = match.isHomeBattingFirst
              ? match.awayTeamAbr
              : match.homeTeamAbr;
            const score1 = match.isHomeBattingFirst
              ? match.homeTeamScore
              : match.awayTeamScore;
            const score2 = match.isHomeBattingFirst
              ? match.awayTeamScore
              : match.homeTeamScore;
            const result = match.wonByMargin;
            const winner = match.winner;
            return (
              <div className="recent-card-wrapper">
                <RecentMatchCard
                  team1={team1}
                  team2={team2}
                  winner={winner}
                  score1={score1}
                  score2={score2}
                  logo1={logo1}
                  logo2={logo2}
                  result={result}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
