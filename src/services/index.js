'use strict';
const list = require('./list');
const todo = require('./todo');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(todo);
  app.configure(list);
};
