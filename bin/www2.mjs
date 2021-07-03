#!/usr/bin/env node

console.log('Loading bin/www2.mjs');

import app from '../server/app2.mjs';
import http from 'http';

const server = http.createServer(app);

const port = 5000;
server.listen(port);

server.on('listening', function () {
  const address = server.address();
  console.log('listening: ' + address.address + ':' + address.port +
    ' ' + address.family);
});

server.on('error', function (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  if (error.code === 'EACCES') {
    console.log('Port requires elevated privledges');
    process.exit(1);
  }
  if (error.code === 'EADDRINUSE') {
    console.log('Address or port in use');
    process.exit(1);
  }
  throw error;
});

console.log('Done loading bin/www2.mjs');
