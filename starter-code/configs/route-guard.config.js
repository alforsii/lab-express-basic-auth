//This is route guard basically checks
//if user in session will allow to go user private page without logging in

module.exports = {
  insureLoggedIn: (req, res, next) =>
    req.session.currentUser ? next() : res.redirect('/login'),
  forwardIfLogged: (req, res, next) =>
    req.session.currentUser ? res.redirect('/main') : next(),
};
