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

const getMessages = (req, res) => {
  res.render("index", {title: 'Mini Messageboard', messages: messages });
};

const postMessage = (req, res) => {
  const {name, message} = req.body;
  messages.push({text: message, user: name, added: new Date()});
  res.redirect('/');
}

module.exports = {
  getMessages, postMessage
};

