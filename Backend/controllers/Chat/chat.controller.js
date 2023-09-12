const Chat = require("../../models/Chat/chat");
const User = require("../../models/user");

const joinChat = async (req, res) => {
  try {
    const { user, accessToken } = req.user;
    const { otherUser } = req.params;
    const foundUser = await User.findById(user);
    if (!foundUser) {
      return res.status(404).json("User not found!");
    }
    const newUser = await User.findById(otherUser);
    if (!newUser) {
      return res.status(404).json("User not found!");
    }
    const foundChat = await Chat.findOne({
        members: {$all: [foundUser._id, newUser._id]}
    });
    if(foundChat) return res.status(200).json("Already in Chat");
    const newChat = await Chat.create({
        members: [
            foundUser._id, 
            newUser._id
        ]
    });
    res.status(200).json(newChat);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error Occured!" });
  }
};

const getUserChats = async(req, res) => {
    try {
        const { user, accessToken } = req.user;
        const foundUser = await User.findById(user);
        if (!foundUser) {
          return res.status(404).json("User not found!");
        }
        const chats = await Chat.find({
            members: {$in: foundUser._id}
        })
        if(!chats){
            res.status(404).json("No Chats found!")
        }
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error Occured!" });
    }
}

const getChatDetails = async(req, res) => {
    try {
        const { user, accessToken } = req.user;
        const { otherUser } = req.params;
        const foundUser = await User.findById(user);
        if (!foundUser) {
          return res.status(404).json("User not found!");
        }
        const newUser = await User.findById(otherUser);
        if (!newUser) {
          return res.status(404).json("User not found!");
        }
        const chats = await Chat.find({
            members: {$all: [foundUser._id, newUser._id]}
        })
        if(!chats){
            res.status(404).json("No Chats found!")
        }
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error Occured!" });
    }
}

module.exports = {
    joinChat,
    getUserChats,
    getChatDetails
}