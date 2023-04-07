const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/points", mainController.getPointsTableData);
router.post("/points", mainController.postTableData);

router.get("/matches", mainController.getMatchesData);
router.post("/matches", mainController.postMatchData);

module.exports = router;
