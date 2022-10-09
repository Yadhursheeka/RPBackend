const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const passport = require("passport");
const bodyParser = require("body-parser");
// const routes = require("./routes/index");

const splitFriendRoutes = require("./api/split_friend.api");
const splitGroupRoutes = require("./api/split_group.api");
const splitExpenseRoutes = require("./api/split_expense.api");

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/splitFriend", splitFriendRoutes);
app.use("/splitGroup", splitGroupRoutes);
app.use("/splitExpense", splitExpenseRoutes);

app.use(passport.initialize());
require("./config/passport")(passport);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);