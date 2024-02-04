import React from "react";
import RecentMatchCard from "../shared/RecentMatchCard/RecentMatchCard";
import "./Schedule.css";

const Schedule = ({ upcomingMatches }) => {
  return (
    <div className="middle-container schedule-container">
      <div className="para-container">
        <p>Upcoming Matches</p>
      </div>
      <div className="upcoming-container">
        {upcomingMatches.map((match) => {
          const team1 = match.homeTeamName;
          const team2 = match.awayTeamName;
          const logo1 = match.homeTeamAbr;
          const logo2 = match.awayTeamAbr;
          const date = match.date;
          const day = match.day;
          const _id = match._id;
          const time = match.time;
          const stadium = match.stadium;
          return (
            <div className="schedule-card-container">
              <div className="date-wrapper">
                <p>
                  {date}, {day}
                </p>
              </div>
              <div className="schedule-card-wrapper">
                <RecentMatchCard
                  team1={team1}
                  team2={team2}
                  logo1={logo1}
                  logo2={logo2}
                  date={date}
                  day={day}
                  _id={_id}
                  time={time}
                  stadium={stadium}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
