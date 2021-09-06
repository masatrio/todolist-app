const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const userController = require('../controllers/user');


router.get('/', userController.getAllUsers);

module.exports = router;
