const express = require("express");
const { protect } = require("../middlewares/token.middleware");
const { fetchUserTimeline } = require("../controllers/post.controller");
const router = express.Router();

router.get(`/timeline/:id`, protect, fetchUserTimeline);

module.exports = router;