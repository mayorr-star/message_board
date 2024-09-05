const { Router } = require('express');
const messageController = require('../controllers/messageController');

const router = Router();

router.get('/', messageController.getMessages);
router.get('/message/:messageId', messageController.getMessageById);

router.post('/new', messageController.postMessage);

module.exports = router;