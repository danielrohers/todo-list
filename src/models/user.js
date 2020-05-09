const crypto = require('crypto');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Number
  }
});

UserSchema.methods.encryptPassword = function encryptPassword(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

UserSchema.virtual('password')
  .set(function set(password) {
    this._plain_password = password;
    this.salt = crypto.randomBytes(32).toString('base64');
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function get() {
    return this._plain_password;
  });

UserSchema.methods.authenticate = function authenticate(password) {
  return this.encryptPassword(password) === this.hashed_password;
};

module.exports.UserModel = mongoose.model('User', UserSchema);
