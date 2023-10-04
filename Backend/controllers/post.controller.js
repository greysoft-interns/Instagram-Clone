const Post = require("../models/groupedPosts");
const User = require("../models/user");

const fetchUserTimeline = async (req, res) => {
  try {
    const { user, accessToken } = req.user;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const groupedPost = await Post.find({ user: { $ne: foundUser._id } }).populate(
      {
        path: 'user likes comments posts',
        select: 'username _id description likes url'
      }
    );
    res.status(200).json({
        data: groupedPost
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error Occured!" });
  }
};

module.exports = {
    fetchUserTimeline
}
