'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('list service', () => {
  it('registered the lists service', () => {
    assert.ok(app.service('lists'));
  });
});
