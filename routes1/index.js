const express = require("express");
const actions = require("../methods/actions");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

// @desc Adding a new user
// @route POST /adduser
router.post("/add-user", actions.addNew);

// @desc Authenticate User
// @route POST /authenticate
router.post("/authenticate-user", actions.authenticate);

// @desc Get info about user
// @route GET /getinfo
router.get("/getinfo", actions.getinfo);

module.exports = router;
