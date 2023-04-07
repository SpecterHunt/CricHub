export const sortTable = (pointsTable) => {
  pointsTable.sort((team1, team2) => {
    const points1 = Number(team1.points);
    const points2 = Number(team2.points);
    if (points1 === points2) {
      const nrr1 = Number(team1.nrr);
      const nrr2 = Number(team2.nrr);

      return nrr1 < nrr2 ? 1 : -1;
    } else return points1 < points2 ? 1 : -1;
  });

  return pointsTable;
};

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;

export const findTodaysMatches = (allMatches) => {
  const todaysMatches = allMatches.filter((match) => {
    const dateArray = match.date.split("-");
    const matchDate = dateArray[0];
    const matchMonth = dateArray[1];

    return matchMonth == month && matchDate == day;
  });
  return todaysMatches.sort((match1, match2) => {
    const time1 = Number(match1.time.split(":")[0]);
    const time2 = Number(match2.time.split(":")[0]);

    return time1 < time2 ? -1 : 1;
  });
};

export const findRecentMatches = (allMatches) => {
  const recentMatches = allMatches.filter((match) => {
    const dateArray = match.date.split("-");
    const matchDate = Number(dateArray[0]);
    const matchMonth = Number(dateArray[1]);

    return matchMonth < month || (matchMonth == month && matchDate < day);
  });

  return recentMatches.reverse();
};
