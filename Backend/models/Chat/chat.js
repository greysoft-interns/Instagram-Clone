const { model, Schema } = require("mongoose");

const chatSchema = new Schema({
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, {
    timestamps: true
});

module.exports = model("Chat", chatSchema);