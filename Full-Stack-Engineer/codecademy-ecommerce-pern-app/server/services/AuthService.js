const createError = require('http-errors');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = class AuthService {

  async register(data) {

    const { email } = data;

    try {
      // Check if user already exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If user already exists, reject
      if (user) {
        throw createError(409, 'Email already in use');
      }

      // User doesn't exist, create new user record
      return await UserModelInstance.create(data);

    } catch(err) {
      throw createError(500, err);
    }

  };

  async login(data) {

    const { email, password } = data;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If no user found, reject
      if (!user) {
        throw createError(401, 'Incorrect username or password');
      }

      // Check for matching passwords
      if (user.password !== password) {
        throw createError(401, 'Incorrect username or password');
      }

      return user;

    } catch(err) {
      throw createError(500, err);
    }

  };

  async googleLogin(profile) {

    const { id, displayName } = profile;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByGoogleId(id);

      // If no user found, create new user
      if (!user) {
        return await UserModelInstance.create({ google: { id, displayName } });
      }

      // User already exists, return profile
      return user;

    } catch(err) {
      throw createError(500, err);
    }

  };

  async facebookLogin(profile) {

    const { id, displayName } = profile;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByFacebookId(id);

      // If no user found, create new user
      if (!user) {
        return await UserModelInstance.create({ facebook: { id, displayName } });
      }

      // User already exists, return profile
      return user;

    } catch(err) {
      throw createError(500, err);
    }

  };

}