const express = require("express");
const router = express.Router();
const controller = require("../controllers/split_group.controller");

// @GET ALL GROUPS LIST
router.get("/get-all", controller.getAllUserGroups);

// @POST GET GROUP DETAILS
router.post("/get", controller.getSplitGroup);

// @POST GET ALL FRIENDS LIST OF A GROUP
router.post("/get-all-friends-list", controller.getAllFriendsListForSplitGroup);

// @POST GET ALL EXPENSES LIST OF A GROUP
router.post(
  "/get-all-expenses-list",
  controller.getAllExpensesListForSplitGroup
);

// @POST CREATE NEW GROUP
router.post("/create-group", controller.createSplitGroup);

// @POST EDIT GROUP
router.post("/edit", controller.editSplitGroup);

// @POST DELETE GROUP
router.post("/delete", controller.deleteSplitGroup);

// @POST ADD FRIENDS TO GROUP
router.post("/add-friends", controller.addMembersToSplitGroup);

module.exports = router;
