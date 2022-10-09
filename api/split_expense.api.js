const express = require("express");
const router = express.Router();
const controller = require("../controllers/split_expense.controller");

// @POST CREATE NEW GROUP
router.post("/create-expense", controller.createSplitExpense);

module.exports = router;
