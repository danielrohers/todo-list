const { UserModel } = require('../models/user');

module.exports.UserService = {

  exists(email) {
    return UserModel.exists({ email });
  },

  create(body) {
    const data = new UserModel(body);
    return data.save();
  },

  findByEmail(email) {
    return UserModel.findOne({ email });
  }

};
