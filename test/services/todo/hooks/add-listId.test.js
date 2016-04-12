'use strict';

const assert = require('assert');
const addListId = require('../../../../src/services/todo/hooks/add-listId.js');

describe('todo addListId hook', () => {
  it('hook can be used', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };
    
    addListId()(mockHook);
    
    assert.ok(mockHook.addListId);
  });
});
