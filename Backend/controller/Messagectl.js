const Message = require("../models/MessageModel");
const conversation = require("../models/ConversationModel");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let chat = await conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!chat) {
      conversation = await conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      chat.messages.push(newMessage._id);
    }

    await Promise.all([chat.save(), newMessage.save()]);
    console.log(newMessage);
    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "error while send message" });
  }
};

module.exports = { sendMessage };
