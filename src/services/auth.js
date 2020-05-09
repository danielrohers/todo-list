const crypto = require('crypto');
const { secretKey } = require('../../config/env');
const { UserModel } = require('../models/user');

const encodeBase64 = (payload, encoding = 'utf8') => Buffer.from(payload, encoding).toString('base64');

const decodeBase64 = (base64) => Buffer.from(base64, 'base64').toString();

const getEncodedSecret = () => crypto.createHmac('SHA256', secretKey).digest('hex');

module.exports.AuthService = {

  verify(token) {
    const [encodedHeader, encodedPayload, encodedSecret] = token.split('.');

    if (encodedSecret !== getEncodedSecret()) {
      return false;
    }

    const decodedHeader = decodeBase64(encodedHeader);
    const decodedPayload = decodeBase64(encodedPayload);

    return UserModel.exists({ lastLogin: decodedHeader, _id: decodedPayload });
  },

  sign(_id, lastLogin) {
    const encodedHeader = encodeBase64(lastLogin.toString(), 'binary');
    const encodedPayload = encodeBase64(_id.toString());
    const encodedSecret = getEncodedSecret();
    return `${encodedHeader}.${encodedPayload}.${encodedSecret}`;
  }

};
