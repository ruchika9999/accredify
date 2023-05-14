const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/user");
const { getCareerGoal } = require("../controllers/careerGoal");
const { getDocument } = require("../controllers/document");

router.get("/user", getUser);
router.get("/career-goal", getCareerGoal);
router.get("/document", getDocument);

module.exports = router;
