const { accessTokenFactory } = require('../lib');

const now = Date.now() / 1000;
const secret = 'SECRET';

const token = accessTokenFactory.createByAliasPayload({
  subject: 1000,
  issuer: 'http://localhost',
  clientId: 2000,
  issuedAt: now,
  expiresIn: now + 60,
  scope: '',
});

const encodeToken = token.encode(secret);
console.log(encodeToken);