const SplitExpense = require("../models/split_expense");
var jwt = require("jwt-simple");
var config = require("../config/dbconfig");
const ObjectID = require("mongoose").Types.ObjectId;

var functions = {
  // --------- CREATE NEW SPLIT EXPENSE -------------
  createSplitExpense: function (req, res) {
    if (
      !req.body.name
      // ||
      // !req.body.category ||
      // !req.body.splitMode ||
      // !req.body.expenseAmount ||
      // !req.body.participantsList ||
      // !req.body.payersList
    ) {
      res.json({ success: false, msg: "Please Enter all fields" });
    } else {
      var splitExpense = SplitExpense({
        groupID: req.body.groupID,
        name: req.body.name,
        category: req.body.category,
        // date: req.body.date,
        splitMode: req.body.splitMode,
        expenseAmount: req.body.expenseAmount,
        participantsList: req.body.participantsList,
        payersList: req.body.payersList,
      });
      splitExpense.save(function (err, splitExpense) {
        if (err) {
          res.json({ success: false, msg: "Failed to save" });
        } else {
          res.json({ success: true, msg: "Successfuly saved" });
        }
      });
    }
  },

  // ---------------- GET EXPENSES LIST FROM SPLIT GROUP ---------------
  getAllExpensesListForSplitGroup: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the group ID" });
    } else {
      var splitExpense = SplitExpense;

      splitExpense
        .find(
          {
            groupID: req.body.id,
          },
          function (err, splitExpense) {
            if (err) {
              res.json({
                success: false,
                msg: "Error occurred, could not retrieve expenses!",
              });
            } else {
              res.json({
                success: true,
                msg: "Successfully retrieved all expenses!",
                data: splitExpense,
              });
            }
          }
        )
        .populate("expensesList");
    }
  },
};

module.exports = functions;
