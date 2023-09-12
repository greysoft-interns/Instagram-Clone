const Message = require("../../models/Chat/message");
const User = require("../../models/user")

const createMessage = async(req, res) => {
    try {
        const { chatId, text } = req.body;
        const { user, accessToken } = req.user;
        const foundUser = await User.findById(user);
        if (!foundUser) {
          return res.status(404).json("User not found!");
        }
        const newMessage = await Message.create({
            chatId,
            senderId: foundUser._id,
            text
        });

        res.status(200).json(newMessage);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error Occured!" });
    }
}

const getChatMessages = async(req, res) => {
    try {
        const { chatId } = req.params;
        // const { user, accessToken } = req.user;
        // const foundUser = await User.findById(user);
        // if (!foundUser) {
        //   return res.status(404).json("User not found!");
        // }
        const newMessage = await Message.find({chatId: chatId});

        res.status(200).json(newMessage);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error Occured!" });
    }
}

module.exports = {
    createMessage,
    getChatMessages
}