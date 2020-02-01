const assertMany = require('./assert-many');

function validateAccessToken(token) {
  assertMany(
    token.sub,
    token.iss,
    token.cid,
    token.iat,
    token.exp,
    token.scope,
  );
}

module.exports = validateAccessToken;
