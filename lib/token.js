const { claimAlias, Token } = require('jwt-core');

claimAlias.set('clientId', 'cid');

module.exports = Token;
