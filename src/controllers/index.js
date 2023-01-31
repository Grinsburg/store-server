const express = require('express');
// const passport = require('passport');
const router = express.Router();

// const { jwtStrategy } = require('../authentication/strategies');
// const authenticationFunc = require('../authentication/authenticationFunc');
const cardController = require('./cardController');
// const authController = require('../constants/authController');
// const locationsController = require('../controllers/locationsController');
// const specializationsController = require('../controllers/specializationsController');

// passport.use('jwt-strategy', jwtStrategy);

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// router.use('/auth', authController);
// router.use(
//   '/recommendations',
//   authenticationFunc('jwt-strategy'),
//   cardController
// );
router.use('/stocks', cardController);

// router.use('/locations', locationsController);
// router.use('/specializations', specializationsController);

module.exports = router;
