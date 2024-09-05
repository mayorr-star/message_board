const asyncHandler = require("express-async-handler");
const NotFoundError = require("../utilis/error_handling/errors/NotFoundError");
const { v4: uuidv4 } = require("uuid");
const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const currentYear = require("../utilis/date");

const getMessages = asyncHandler(async (req, res) => {
  if (!messages) {
    throw new NotFoundError("Messages not found");
  }
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    year: currentYear,
  });
});

const postMessage = asyncHandler(async (req, res) => {
  const { name, message } = req.body;
  messages.push({ id: uuidv4(), text: message, user: name, added: new Date() });
  res.redirect("/");
});

const getMessageById = asyncHandler(async (req, res) => {
  const messageId = req.params.messageId;
  const message = messages.find((message) => message.id === messageId);
  if (!message) {
    throw new NotFoundError("Message not found");
  }
  res.render("message", { user: message.user, text: message.text });
});

module.exports = {
  getMessages,
  postMessage,
  getMessageById,
};
