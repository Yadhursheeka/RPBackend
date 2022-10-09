const User = require("../models/user.model");
var jwt = require("jwt-simple");
var config = require("../config/dbconfig");
const ObjectID = require("mongoose").Types.ObjectId;

var functions = {
  // ------------ USER REGISTRATION -----------
  userRegistration: function (req, res) {
    if (
      (!req.body.fullName,
      !req.body.email,
      !req.body.mobile,
      !req.body.password)
    ) {
      res.json({ success: false, msg: "Please fill all fields" });
    } else {
      var user = User({
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
      });

      user.save(function (err, user) {
        if (err) {
          res.json({ success: false, msg: "Error, Could not register" });
        } else {
          res.json({ success: true, msg: "Registration Successful!" });
        }
      });
    }
  },
};

module.exports = functions;
