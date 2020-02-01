const Token = require('./token');
const validateAccessToken = require('./validate-access-token');

function createAccessTokenByAliasPayload(payload) {
  const token = Token.createByAliasPayload(payload);
  validateAccessToken(token);

  return token;
}

module.exports = createAccessTokenByAliasPayload;
