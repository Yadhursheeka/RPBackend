const mongoose = require("mongoose");

const splitGroupSchema = new mongoose.Schema({
  // groupID: {type:String, require:true},
  name: { type: String, require: true },
  category: { type: String, require: true },
  friendsList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "splitFriends",
      default: [],
    },
  ],
  expensesList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "splitExpenses",
      default: [],
    },
  ],
  membersCount: { type: Number, default: 0 },
  receivable: { type: Number, default: 0.0 },
  payable: { type: Number, default: 0.0 },
  // admin: {type: mongoose.Schema.Types.ObjectId, require: true},
  // timestamp: {},
});

const SplitGroup = mongoose.model("splitGroups", splitGroupSchema);

module.exports = SplitGroup;
