import React from "react";
import axios from "axios";

import { sortTable, findTodaysMatches, findRecentMatches } from "../util";

const url = "http://localhost:5000";

class Data extends React.Component {
  static getPointsTableData = async () => {
    try {
      const { data } = await axios.get(`${url}/points`);
      const sortedData = sortTable(data);
      return sortedData;
    } catch (err) {
      console.log(err);
    }
  };

  static getMatchesData = async () => {
    try {
      const { data } = await axios.get(`${url}/matches`);
      const todaysData = findTodaysMatches(data);
      const recentMatchesData = findRecentMatches(data);

      return { todaysData, recentMatchesData };
    } catch (err) {
      console.log(err);
    }
  };
}

export default Data;
