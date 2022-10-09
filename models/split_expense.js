const mongoose = require("mongoose");

const splitExpenseSchema = new mongoose.Schema({
  groupID: { type: mongoose.Schema.Types.ObjectId, require: true },
  name: { type: String, require: true },
  category: { type: String, require: false },
  //   date: { type: Date, require: false },
  splitMode: { type: String, require: true },
  expenseAmount: { type: Number, default: 0 },
  participantsList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      // ref: "splitFriends",
      default: [],
    },
  ],
  payersList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      //   ref: "splitFriends",
      default: [],
    },
  ],

  // admin: {type: mongoose.Schema.Types.ObjectId, require: true},
  // timestamp: {},
});

const SplitExpense = mongoose.model("splitExpenses", splitExpenseSchema);

module.exports = SplitExpense;
