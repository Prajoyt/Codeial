const express = require('express');

//import passport again
const passport = require('passport');


const router = express.Router();
const usersController = require('../controllers/users_controller');


router.get('/profile',passport.checkAuthentication, usersController.profile);

router.get('/sign-in', usersController.signIn);
router.get('/sign-up', usersController.signUp);


router.post('/create', usersController.create);

//use passport as an middleware to authenticate

router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in' },
), usersController.createSession);



router.get('/sign-out',usersController.destroySession);

module.exports = router;