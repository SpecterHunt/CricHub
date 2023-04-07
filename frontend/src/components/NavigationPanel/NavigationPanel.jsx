import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./NavigationPanel.css";
import "../../App.css";

import home from "../../assets/home.png";
import schedule from "../../assets/schedule.png";
import stats from "../../assets/stats.png";
import fantasy from "../../assets/fantasy.png";

const NavigationPanel = () => {
  return (
    <div className="nav-panel">
      <Link to="/" className="logo">
        <p>
          <span className="cric">Cric</span>
          <span className="hub">Hub</span>
        </p>
      </Link>
      <div className="nav-links">
        <NavLink
          exact
          to="/"
          className={`nav-link ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          <img src={home} alt="home logo" />
          <span className="home">Home</span>
        </NavLink>
        <NavLink
          to="/schedule"
          className={`nav-link ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          <img src={schedule} alt="schedule logo" />
          <span className="schedule">Schedule</span>
        </NavLink>
        <NavLink
          to="/stats"
          className={`nav-link ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          <img src={stats} alt="stats logo" />
          <span className="stats">Stats</span>
        </NavLink>
        <NavLink
          to="/fantasy"
          className={`nav-link ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          <img src={fantasy} alt="fantasy logo" />
          <span className="fantasy">Fantasy</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationPanel;
