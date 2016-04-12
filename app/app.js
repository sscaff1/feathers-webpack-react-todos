const feathers = require('feathers-client');
const io = require('socket.io-client');

const socket = io();
export const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));
