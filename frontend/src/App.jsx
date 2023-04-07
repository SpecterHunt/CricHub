import React, { Component } from "react";
import { Link, Routes, Route, NavLink, Outlet } from "react-router-dom";
import ApiData from "./apis/data";

import "./App.css";

import NavigationPanel from "./components/NavigationPanel/NavigationPanel";
import Home from "./components/Home/Home";
import Fantasy from "./components/Fantasy/Fantasy";
import Stats from "./components/Stats/Stats";
import Schedule from "./components/Schedule/Schedule";
import PointsTable from "./components/PointsTable/PointsTable";

class App extends Component {
  state = {
    isFetching: true,
    pointsTable: [],
    todaysData: [],
    recentMatchesData: [],
  };

  async componentDidMount() {
    const pointsTable = await ApiData.getPointsTableData();
    const { todaysData, recentMatchesData } = await ApiData.getMatchesData();
    this.setState({
      pointsTable,
      todaysData,
      recentMatchesData,
      isFetching: false,
    });
  }

  render() {
    return (
      <div className="main-box">
        <NavigationPanel />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isFetching={this.state.isFetching}
                todaysData={this.state.todaysData}
                recentMatchesData={this.state.recentMatchesData}
              />
            }
            exact
          />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/fantasy" element={<Fantasy />} />
        </Routes>
        <PointsTable pointsTable={this.state.pointsTable} />
      </div>
    );
  }
}

export default App;
