//Making global user variable and it's only available in hbs views

module.exports = (req, res, next) => {
  res.locals.user = req.session.currentUser;
  next();
};
