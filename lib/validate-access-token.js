const assertMany = require('./assert-not-null-and-undefined-many');

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
