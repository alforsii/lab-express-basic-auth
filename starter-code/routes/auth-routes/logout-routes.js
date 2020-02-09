const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

//1.One way
// router.use((req, res, next) => {
//   req.session.currentUser ? next() : res.redirect('/login');
// });
//2. Another way
const { insureLoggedIn } = require('../../configs/route-guard.config');
// const insureLoggedIn = require('../../configs/route-guard.config').insureLoggedIn;

router.get('/main', insureLoggedIn, (req, res) => {
  // console.log('Output for: req', req.session.currentUser);
  // res.render('auth/main', { user: req.session.currentUser });
  //after making req.session.currentUser === user global variable no need to pass user to views
  res.render('auth/main');
});
router.get('/private', insureLoggedIn, (req, res) => {
  res.render('auth/private');
});

router.get('/logout', insureLoggedIn, (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login');
  });
});

module.exports = router;
