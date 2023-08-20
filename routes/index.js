
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const { route } = require('./question');

router.get('/',homeController.home);

router.use('/question',require('./question'));



module.exports = router;