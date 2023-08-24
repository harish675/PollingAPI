
const express = require('express');
const router = express.Router();

const optionController = require('../controllers/option_controller');

router.post('/:id/create',optionController.createOption);
router.get('/:id/vote',optionController.voting);

module.exports = router;