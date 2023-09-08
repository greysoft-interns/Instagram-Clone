const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupedSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  caption: {
    type: String,
  },
  location: {
    type: String,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("GroupedPosts", groupedSchema);
