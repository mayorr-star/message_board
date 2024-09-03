const { Router } = require('express');
const getMessages = require('../controllers/messageController');

const router = Router();

router.get('/', getMessages);

module.exports = router;