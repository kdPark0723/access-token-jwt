const Token = require('./token');
const validateAccessToken = require('./validate-access-token');

function createAccessTokenByEncodingToken(jwtString, secretOrPrivateKey, options) {
  const token = Token.createByEncodingToken(jwtString, secretOrPrivateKey, options);
  validateAccessToken(token);

  return token;
}

module.exports = createAccessTokenByEncodingToken;
