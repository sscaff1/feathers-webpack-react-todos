'use strict';

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.createdAt = function(options) {
  return function(hook) {
    hook.data = Object.assign({}, hook.data, {createdAt: new Date()});
  };
};
