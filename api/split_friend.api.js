const express = require("express");
const router = express.Router();
const controller = require("../controllers/split_friend.controller");

// @GET GET ALL FRIENDS LIST
router.get("/get-all", controller.getAllSplitFriends);

// @GET POST FRIEND DETAILS
router.post("/get", controller.getSplitFriend);

// @POST CREATE A NEW SPLIT FRIEND
router.post("/create", controller.createSplitFriend);

// @POST EDIT SPLIT FRIEND
router.post("/edit", controller.editSplitFriend);

// @POST DELETE SPLIT FRIEND
router.post("/delete", controller.deleteSplitFriend);

module.exports = router;
