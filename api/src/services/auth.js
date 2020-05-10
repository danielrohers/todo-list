const crypto = require('crypto');
const { secretKey } = require('../../config/env');
const { UserModel } = require('../models/user');

const ALGORITHM = 'SHA256';
const ENCODING = 'base64';

const encodeBase64 = (payload, encoding = 'utf8') => Buffer.from(payload, encoding).toString(ENCODING);

const decodeBase64 = (base64) => Buffer.from(base64, ENCODING).toString();

const getEncodedSecret = () => crypto.createHmac(ALGORITHM, secretKey).digest('hex');

module.exports.AuthService = {

  getUser(token) {
    const [encodedHeader, encodedPayload, encodedSecret] = token.split('.');

    if (encodedSecret !== getEncodedSecret()) {
      return false;
    }

    const decodedHeader = decodeBase64(encodedHeader);
    const decodedPayload = decodeBase64(encodedPayload);

    return UserModel.findOne({ lastLogin: decodedHeader, _id: decodedPayload });
  },

  verify(token) {
    return !!this.getUser(token);
  },

  sign(_id, lastLogin) {
    const encodedHeader = encodeBase64(lastLogin.toString(), 'binary');
    const encodedPayload = encodeBase64(_id.toString());
    const encodedSecret = getEncodedSecret();
    return `${encodedHeader}.${encodedPayload}.${encodedSecret}`;
  }

};
