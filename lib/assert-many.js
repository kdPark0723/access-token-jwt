const assert = require('assert');

function assertMany(...members) {
  members.forEach((member) => {
    assert.notEqual(member, null);
    assert.notEqual(member, undefined);
  });
}

module.exports = assertMany;
