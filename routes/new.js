const { Router } = require('express');
const router = Router();
const getForm = require('../controllers/formController');
const messageController = require('../controllers/messageController');

router.get('/', getForm);
router.get('/:messageId', messageController.getMessageById);

module.exports = router;