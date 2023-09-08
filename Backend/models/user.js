const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    avatar: {
      public_id: {
        type: String,
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    website: {
      type: String,
    },
    bio: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    privacyAccount: {
      type: Boolean,
      default: false,
    },
    accountType: {
      type: String,
      enum: ["social", "professional"],
    },
    privateInfo: {
      gender: {
        type: String,
        enum: ["male", "female"],
      },
      phoneNumber: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
    },
    savedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    refreshToken: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
