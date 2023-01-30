const passport = require('passport');

const authenticationFunc = (nameStrategy, actionFunction) => (
  req,
  res,
  next
) => {
  const authWithAction = passport.authenticate(
    nameStrategy,
    (err, user, info) => {
      if (err) {
        console.error(err.message);
        res.send({ error: err.message });
      }
      if (info != undefined) {
        console.log(info.message);
        res.send({ error: info.message });
      } else {
        actionFunction(err, req, res, user);
      }
    }
  );
  const authWithOutAction = passport.authenticate(nameStrategy);

  return actionFunction
    ? authWithAction(req, res, next)
    : authWithOutAction(req, res, next);
};

module.exports = authenticationFunc;