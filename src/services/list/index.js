'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'lists.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 50,
      max: 2000
    }
  };

  // Initialize our service with any options it requires
  app.use('/lists', service(options));

  // Get our initialize service to that we can bind hooks
  const listService = app.service('/lists');

  // Set up our before hooks
  listService.before(hooks.before);

  // Set up our after hooks
  listService.after(hooks.after);
};
