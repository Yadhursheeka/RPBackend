const mongoose = require("mongoose");

const splitFriendSchema = new mongoose.Schema({
  // friendID: {type:String, require:true},
  name: { type: String, require: true },
  email: { type: String, require: true },
  mobile: { type: String, require: true },
  receivable: { type: Number, default: 0.0 },
  payable: { type: Number, default: 0.0 },
});

const SplitFriend = mongoose.model("splitFriends", splitFriendSchema);

module.exports = SplitFriend;
