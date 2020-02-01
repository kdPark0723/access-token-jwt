const assert = require('assert');

function assertNotNullAndUndefinedMany(...members) {
  members.forEach((member) => {
    assert.notEqual(member, null);
    assert.notEqual(member, undefined);
  });
}

module.exports = assertNotNullAndUndefinedMany;
