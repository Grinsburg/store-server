const express = require('express');
const passport = require('passport');
const router = express.Router();

const authenticationFunc = require('../authentication/authenticationFunc');
const { registerFunc, loginFunc } = require('../authentication/helperFuncs');
const {
  registerStrategy,
  loginStrategy
} = require('../authentication/strategies');

passport.use('register-strategy', registerStrategy);
passport.use('login-strategy', loginStrategy);

router.post('/register', authenticationFunc('register-strategy', registerFunc));
router.post('/login', authenticationFunc('login-strategy', loginFunc));

module.exports = router;
