const express = require('express');
const router = express.Router();

const { Signup }  = require('../controllers/signup.controller');
const { Login }  = require('../controllers/login.controller');


router.post('/signup', Signup);
router.post('/login', Login);




module.exports = router;