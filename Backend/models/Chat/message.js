const { model, Schema } = require("mongoose");

const messageSchema = new Schema({
    chatId: {
        type: String,
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = model("Message", messageSchema);