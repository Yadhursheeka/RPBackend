const SplitGroup = require("../models/split_group");
const SplitExpense = require("../models/split_expense");
var jwt = require("jwt-simple");
var config = require("../config/dbconfig");
const ObjectID = require("mongoose").Types.ObjectId;

var functions = {
  // --------- CREATE NEW SPLIT GROUP -------------
  createSplitGroup: function (req, res) {
    if (!req.body.name || !req.body.category) {
      res.json({ success: false, msg: "Please Enter all fields" });
    } else {
      var splitGroup = SplitGroup({
        name: req.body.name,
        category: req.body.category,
      });
      splitGroup.save(function (err, splitGroup) {
        if (err) {
          res.json({ success: false, msg: "Failed to save" });
        } else {
          res.json({ success: true, msg: "Successfuly saved" });
        }
      });
    }
  },

  // -------------- ADD MEMBERS TO SPLIT GROUP --------------------
  addMembersToSplitGroup: function (req, res) {
    if (!req.body.id || !req.body.friendsList || !req.body.membersCount) {
      res.json({ success: false, msg: "Please pass all required parameters" });
    } else {
      var id = req.body.id;
      var membersCount = req.body.membersCount;

      var newSplitGroup = SplitGroup({
        _id: ObjectID(id),
        membersCount: membersCount,
        friendsList: req.body.friendsList,
      });

      SplitGroup.updateOne(
        { _id: id },
        newSplitGroup,
        function (err, newSplitGroup) {
          if (err) {
            res.json({
              success: false,
              msg: "Error, could not add members to group!",
            });
          } else {
            res.json({
              success: true,
              msg: "Successfully Added members to Group!",
            });
          }
        }
      );
    }
  },

  // ----------------- GET ALL LOGGED USER'S SPLIT GROUPS -----------------
  getAllUserGroups: function (req, res) {
    var splitGroup = SplitGroup;
    splitGroup.find(function (err, splitGroup) {
      if (err) {
        res.json({
          success: false,
          msg: "Error occurred, could not retrieve groups!",
        });
      } else {
        res.json({
          success: true,
          msg: "Successfully retrieved all groups!",
          data: splitGroup,
        });
      }
    });
    // .populate("friendsList");
  },

  // ---------------- GET FRIENDS LIST FROM SPLIT GROUP ---------------
  getAllFriendsListForSplitGroup: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the group ID" });
    } else {
      var splitGroup = SplitGroup;
      splitGroup
        .findById(req.body.id, function (err, splitGroup) {
          if (err) {
            res.json({
              success: false,
              msg: "Error occurred, could not retrieve groups!",
            });
          } else {
            res.json({
              success: true,
              msg: "Successfully retrieved all groups!",
              data: splitGroup.friendsList,
            });
          }
        })
        .populate("friendsList");
    }
  },

  // ---------------- GET EXPENSES LIST FROM SPLIT GROUP ---------------
  getAllExpensesListForSplitGroup: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the group ID" });
    } else {
      var splitExpense = SplitExpense;

      splitExpense.find(
        {
          groupID: ObjectID(req.body.id),
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
      );
    }
  },

  //   ---------------- GET SPECIFIC SPLIT GROUP DETAILS -----------------
  getSplitGroup: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the ID" });
    } else {
      var splitGroup = SplitGroup;

      splitGroup.findById(req.body.id, function (err, splitGroup) {
        if (err) {
          res.json({
            success: false,
            msg: "Error, could not retrieve group details",
          });
        } else {
          res.json({
            success: true,
            msg: "Successfully retrieved group details!",
            data: splitGroup,
          });
        }
      });
    }
  },

  //   ------------------- EDIT SPLIT GROUP -----------------
  editSplitGroup: function (req, res) {
    if (
      !req.body.name ||
      !req.body.category ||
      req.body.friendsList ||
      req.body.membersCount
    ) {
      res.json({ success: false, msg: "Please fill all fields!" });
    } else {
      var newGroup = SplitGroup({
        name: req.body.name,
        category: req.bosy.category,
        friendsList: req.body.friendsList,
        membersCount: req.body.membersCount,
      });

      newGroup.updateOne(function (err, newGroup) {
        if (err) {
          res.json({ success: false, msg: "Error, could not edit group" });
        } else {
          res.json({ success: true, msg: "Successfully Edited Group!" });
        }
      });
    }
  },

  //   --------------- DELETE SPLIT GROUP -----------------------
  deleteSplitGroup: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the group ID!" });
    } else {
      var newGroup = SplitGroup({
        id: req.body.id,
      });

      newGroup.deleteOne(function (err, newGroup) {
        if (err) {
          res.json({ success: false, msg: "Error, could not delete group" });
        } else {
          res.json({ success: true, msg: "Successfully Deleted Group!" });
        }
      });
    }
  },
};

module.exports = functions;
