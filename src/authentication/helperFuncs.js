const jwt = require('jsonwebtoken');

const { jwtOptions } = require('./strategies');
const { userService } = require('../services/userService');
const { EXPIRE_IN } = require('../controllers');

const registerFunc = (err, req, res, user) =>
  req.logIn(user, async (err) => {
    const { name, surname, login, email, role } = req.body;
    const data = {
      name,
      surname,
      email,
      role
    };

    await userService.updateByLogin(
      {
        login
      },
      data
    );

    return res.status(200).send({
      message: 'User was registered'
    });
  });

const loginFunc = (err, req, res, user) =>
  req.logIn(user, async (err) => {
    const { login, password } = user;
    const person = await userService.getUser({
      login
    });

    if (person.password === password) {
      const { name, surname, login, email, role } = person;
      const payload = {
        name,
        surname,
        login,
        email,
        role
      };
      const token = jwt.sign(payload, jwtOptions.secretOrKey, {
        expiresIn: EXPIRE_IN
      });

      return res.status(200).send({
        auth: true,
        token,
        person,
        message: 'User found & logged in'
      });
    }
  });

module.exports = { registerFunc, loginFunc };