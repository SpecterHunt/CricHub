import React from "react";
import "./PointsTable.css";

const PointsTable = ({ pointsTable }) => {
  return (
    <div className="table-container">
      <div className="table-container__heading">
        <p>Points Table</p>
      </div>
      <div className="points-table">
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>M</th>
              <th>W</th>
              <th>L</th>
              <th>NR</th>
              <th>Pts</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.length ? (
              pointsTable.map((teamInfo) => {
                return (
                  <tr key={teamInfo.team}>
                    <td>
                      <img src={`./src/assets/${teamInfo.team}.jpg`} />
                      {teamInfo.team}
                    </td>
                    <td>{teamInfo.played}</td>
                    <td>{teamInfo.won}</td>
                    <td>{teamInfo.lost}</td>
                    <td>{teamInfo.nr}</td>
                    <td>{teamInfo.points}</td>
                    <td>{teamInfo.nrr}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
