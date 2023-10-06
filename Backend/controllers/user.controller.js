const User = require("../models/user");
const Post = require("../models/post");
const groupedPost = require("../models/groupedPosts");
const Comment = require("../models/comment")

const uploadDP = async (req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { public_id, url } = req.avatar;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const newUrlData = {
      public_id,
      url,
    };
    foundUser.avatar = newUrlData;
    foundUser.save();
    return res.status(200).json("Display Picture Created!");
  } catch (error) {
    console.log(`Error:`, error);
    return res.status(500).send("Server Error");
  }
};

const uploadPosts = async (req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { caption, location } = req.body;
    const postData = await req.posts;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const postsArray = postData.map(async (post) => {
      const newPost = await Post.create({
        user: foundUser._id,
        public_id: post.public_id,
        url: post.url,
      });
      return newPost._id;
    });
    Promise.all(postsArray)
      .then(async (groupedData) => {
        const newGrouped = await groupedPost.create({
          user: foundUser._id,
          posts: groupedData,
          caption: caption ? caption : "",
          location: location ? location : "",
        });
        if (!newGrouped) {
          return res.status(400).send("Could not Upload Post");
        }
        return res.status(200).json("Upload Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(`Error:`, error);
    return res.status(500).send("Server Error");
  }
};

const likeAndUnlikePost = async (req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { id } = req.params;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const foundPost = await groupedPost.findOne({ _id: id, likes: user });
    if(!foundPost){
      let newPost = await groupedPost.findById(id);
      newPost.likes.push(foundUser._id);
      await newPost.save();
      return res.status(200).json("Like Successful")
    } else {
      await groupedPost.findOneAndUpdate(
        { _id: id },
        { $pull: { likes: user } },
        { new: true }
        )
        return res.status(200).json("Unlike Successful")
    }
  } catch (error) {
    console.log(`Error:`, error);
    return res.status(500).send("Server Error");
  }
};

const commentOnPost = async (req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { comment } = req.body;
    const { id } = req.params;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const foundPost = await groupedPost.findById(id);
    if(!foundPost){
      return res.status(404).json("Post not found!");
    }
    const newComment = await Comment.create({user: foundUser._id, description: comment})
    foundPost.comments.push(newComment._id);
    await foundPost.save();
    return res.status(200).json("Comment Successful!")
  } catch (error) {
    console.log(`Error:`, error);
    return res.status(500).send("Server Error");
  }
};

const likeAndUnlikeComment = async(req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { id } = req.params;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const foundComment = await Comment.findOne({ _id: id, likes: user });
    if(!foundComment){
      let newComment = await Comment.findById(id);
      newComment.likes.push(foundUser._id);
      await newComment.save();
      return res.status(200).json("Like Successful")
    } else {
      await Comment.findOneAndUpdate(
        { _id: id },
        { $pull: { likes: user } },
        { new: true }
        )
        return res.status(200).json("Unlike Successful")
    }
  } catch (error) {
    console.log(`Error:`, error);
    return res.status(500).send("Server Error");
  }
}

const followAndUnfollowUser = async(req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { id } = req.params;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const foundFollower = await User.findOne({ _id: id, followers: user });
    if(!foundFollower){
      let newUser = await User.findById(id);
      newUser.followers.push(foundUser._id);
      foundUser.followings.push(newUser._id);
      await newUser.save();
      await foundUser.save();
      return res.status(200).json("Follow Successful")
    } else {
      await User.findOneAndUpdate(
        { _id: id },
        { $pull: { followers: user } },
        { new: true }
        )
        await User.findOneAndUpdate(
          { _id: foundUser._id },
          { $pull: { followings: foundFollower._id } },
          { new: true }
          )
        return res.status(200).json("UnFollow Successful")
    }
  } catch (error) {
    console.log(`Error:`, error);
    return res.status(500).send("Server Error");
  }
}

const getUserDetails = async(req, res) => {
  const { user, accessToken } = req.user;
  const foundUser = await User.findById(user).select({
    "password": 0,
    "refreshToken" : 0
  }).lean();
  if (!foundUser) {
    return res.status(404).json("User not found!");
  }
  return res.status(200).json({
    message: "User Details",
    data: foundUser,
    token: accessToken
  })
}

const getUserPosts = async(req, res) => {
  const { user, accessToken } = req.user;
  const foundUser = await User.findById(user).select({
    "password": 0,
    "refreshToken" : 0
  }).lean();
  if (!foundUser) {
    return res.status(404).json("User not found!");
  }
  const allUserPosts = await groupedPost.find({user: foundUser._id}).populate([
    {
      path: "posts",
        select: {
          url: 1,
          _id: 0,
        },
    },
    {
      path: "comments",
      select: {
        description: 1,
        _id: 0,
      },
      populate: [
        {
          path: "user",
          select: {
            username: 1,
            _id: 0,
          },
        },
        {
          path: "likes",
          select: {
            username: 1,
            _id: 0,
          },
        },
      ],
    },
    {
      path: "likes",
      select: {
        username: 1,
        _id: 0,
      },
    }
  ])
  return res.status(200).json({
    message: "User Posts",
    data: allUserPosts,
    token: accessToken
  })
}

module.exports = {
  uploadDP,
  uploadPosts,
  likeAndUnlikePost,
  commentOnPost,
  likeAndUnlikeComment,
  followAndUnfollowUser,
  getUserDetails,
  getUserPosts,
};
