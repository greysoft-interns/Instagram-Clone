const express = require("express");
const { handler, postsHandler } = require("../middlewares/upload");
const {
  uploadDP,
  uploadPosts,
  likeAndUnlikePost,
  commentOnPost,
  likeAndUnlikeComment,
  followAndUnfollowUser,
  getUserDetails,
} = require("../controllers/user.controller");
const { protect } = require("../middlewares/token.middleware");
const router = express.Router();

router.get("/get", protect, getUserDetails);
router.post("/display-pic", protect, handler, uploadDP);
router.post("/posts", protect, postsHandler, uploadPosts);
router.patch("/like/:id", protect, likeAndUnlikePost);
router.patch("/follow/:id", protect, followAndUnfollowUser);
router.patch("/comment/like/:id", protect, likeAndUnlikeComment);
router.patch("/comment/:id", protect, commentOnPost);

module.exports = router;
