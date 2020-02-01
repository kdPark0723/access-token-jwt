const createAccessTokenByPayload = require('./create-access-token-by-payload');
const createAccessTokenByAliasPayload = require('./create-access-token-by-alias-payload');
const createAccessTokenByEncodingToken = require('./create-access-token-by-encoding-token');

module.exports = {
  createByPayload: createAccessTokenByPayload,
  createByAliasPayload: createAccessTokenByAliasPayload,
  createByEncodingToken: createAccessTokenByEncodingToken,
};
