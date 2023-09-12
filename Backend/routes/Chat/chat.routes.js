const express = require("express");
const { protect } = require("../../middlewares/token.middleware");
const { joinChat, getUserChats, getChatDetails } = require("../../controllers/Chat/chat.controller");
const router = express.Router()

router.post("/user/:otherUser", protect, joinChat);
router.get("/user/all", protect, getUserChats);
router.get("/user/:otherUser", protect, getChatDetails);

module.exports = router;