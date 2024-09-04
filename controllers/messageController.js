const asyncHandler = require("express-async-handler");
const NotFoundError = require('../utilis/error_handling/errors/NotFoundError');
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const currentYear = require("../utilis/date");

const getMessages = asyncHandler(async (req, res) => {
  if (!messages) {
    throw new NotFoundError('Messages not found');
  }
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    year: currentYear,
  });
});

const postMessage = asyncHandler(async (req, res) => {
  const { name, message } = req.body;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

const getMessageById = asyncHandler(async (req, res) => {

});

module.exports = {
  getMessages,
  postMessage,
  getMessageById
};
