const SplitFriend = require("../models/split_friend");
const User = require("../models/user");
var jwt = require("jwt-simple");
var config = require("../config/dbconfig");
const ObjectID = require("mongoose").Types.ObjectId;

var functions = {
  // --------- CREATE A NEW SPLIT FRIEND -------------
  createSplitFriend: function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.mobile) {
      res.json({ success: false, msg: "Please Enter all fields" });
    } else {
      var splitFriend = SplitFriend({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
      });
      splitFriend.save(function (err, splitFriend) {
        if (err) {
          res.json({ success: false, msg: "Failed to save" });
        } else {
          res.json({ success: true, msg: "Successfuly saved" });
        }
      });
    }
  },

  // -------------------- GET ALL FRIENDS LIST ------------------
  getAllSplitFriends: function (req, res) {
    // if (
    //   req.headers.authorization &&
    //   req.headers.authorization.split(" ")[0] === "Bearer"
    // ) {
    //   var token = req.headers.authorization.split(" ")[1];
    //   var decodedtoken = jwt.decode(token, config.secret);
    // return res.json({
    //   success: true,
    //   msg: "Friends List retrieved successfully!",
    // });
    // } else {
    //   return res.json({
    //     success: false,
    //     msg: "Error occurred, couldn't retrieve friends list due to no authorization!",
    //   });
    // }

    var newSplitFriend = SplitFriend;
    newSplitFriend.find(function (err, newSplitFriend) {
      if (err) {
        res.json({ success: false, msg: "Failed to retrieve" });
      } else {
        res.json({
          success: true,
          msg: "Successfully retrieved!",
          data: newSplitFriend,
        });
      }
    });

    // return res.json({
    //   success: true,
    //   msg: "Friends List retrieved successfully!",
    // });
  },

  // ------------------- EDIT SPLIT FRIEND -----------------------
  editSplitFriend: function (req, res) {
    if ((!req.body.id, !req.body.name || !req.body.email || !req.body.mobile)) {
      res.json({ success: false, msg: "Please fill all fields" });
    } else {
      var id = req.body.id;

      var newSplitFriend = SplitFriend({
        _id: ObjectID(id),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
      });

      SplitFriend.updateOne(
        { _id: ObjectID(id) },
        newSplitFriend,
        function (err, newSplitFriend) {
          if (err) {
            res.json({ success: false, msg: "Failed to edit" });
          } else {
            res.json({ success: true, msg: "Successfully Edited!" });
          }
        }
      );
    }
  },

  // ------------- DELETE SPLIT FRIEND --------------
  deleteSplitFriend: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the ID" });
    } else {
      var id = req.body.id;

      var newSplitFriend = SplitFriend({
        _id: ObjectID(id),
      });

      newSplitFriend.deleteOne(function (err, newSplitFriend) {
        if (err) {
          res.json({ success: false, msg: "Error, could not delete" });
        } else {
          res.json({ success: true, msg: "Successfully deleted!" });
        }
      });
    }
  },

  // --------- GET SPLIT FRIEND ---------------
  getSplitFriend: function (req, res) {
    if (!req.body.id) {
      res.json({ success: false, msg: "Please pass the ID" });
    } else {
      var newSplitFriend = SplitFriend({
        id: req.body.id,
      });

      newSplitFriend.findById(function (err, newSplitFriend) {
        if (err) {
          res.json({ success: false, msg: "Error, could not retrieve friend" });
        } else {
          res.json({
            success: true,
            msg: "Successfully retrieved friend details!",
            data: newSplitFriend,
          });
        }
      });
    }
  },

  // Add new user
  addNew: function (req, res) {
    if (!req.body.name || !req.body.password) {
      res.json({ success: false, msg: "Please Enter all fields" });
    } else {
      var newUser = User({
        name: req.body.name,
        password: req.body.password,
      });
      newUser.save(function (err, newUser) {
        if (err) {
          res.json({ success: false, msg: "Failed to save" });
        } else {
          res.json({ success: true, msg: "Successfuly saved" });
        }
      });
    }
  },
};

module.exports = functions;
