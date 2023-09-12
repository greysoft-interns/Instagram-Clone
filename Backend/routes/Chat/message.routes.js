const express = require("express");
const { createMessage, getChatMessages } = require("../../controllers/Chat/message.controller");
const { protect } = require("../../middlewares/token.middleware");
const router = express.Router()

router.post("/message", protect, createMessage);
router.get("/message/:chatId", getChatMessages);

module.exports = router;