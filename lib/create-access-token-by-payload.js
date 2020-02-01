const Token = require('./token');
const validateAccessToken = require('./validate-access-token');

function createAccessTokenByPayload(payload) {
  const token = Token.createByPayload(payload);
  validateAccessToken(token);

  return token;
}

module.exports = createAccessTokenByPayload;
