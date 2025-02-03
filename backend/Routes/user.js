const express = require('express');
const router = express.Router();
const userController = require('../Controllers/User'); 
const fetchUser = require('../Middleware/fetchUser'); 

// Route to get user details
router.get('/',fetchUser, userController.getUserDetails);

// Route to update user details
router.put('/',fetchUser, userController.updateUserDetails);

module.exports = router;
