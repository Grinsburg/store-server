const bcrypt = require('bcrypt');
const passportJWT = require('passport-jwt');
const passportLocal = require('passport-local');

const { userService } = require('../services/userService');
const { BCRYPT_SALT_ROUNDS, SECRET_WORD } = require('../controllers');

const localStrategy = passportLocal.Strategy;

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_WORD,
  session: false
};

const loginStrategy = new localStrategy(
  {
    usernameField: 'login',
    passwordField: 'password',
    session: false
  },
  async (login, password, done) => {
    try {
      const user = await userService.getUser({ login });

      if (user === null) {
        return done(null, false, { message: 'Bad login' });
      } else {
        const compration = await bcrypt.compare(password, user.password);

        if (!compration) {
          return done(null, false, { message: 'Bad password' });
        } else {
          return done(null, user);
        }
      }
    } catch (error) {
      return done(error);
    }
  }
);

const registerStrategy = new localStrategy(
  {
    usernameField: 'login',
    passwordField: 'password',
    session: false
  },
  async (login, password, done) => {
    try {
      const user = await userService.getUser({ login });

      if (user) {
        return done(null, false, { message: 'User already taken' });
      } else {
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const user = await userService.create({
          login,
          password: hashedPassword
        });

        return done(null, user);
      }
    } catch (error) {
      return done(error);
    }
  }
);

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, next) => {
  const { login } = payload;
  const user = await userService.getUser({ login });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

module.exports = {
  jwtOptions,
  jwtStrategy,
  loginStrategy,
  registerStrategy
};