'use strict';
console.log('Loading app.js');

// native node packages
const path = require('path');
// const url = require('url');

// express packages
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const app = express();

const dataRoutes = require('./routes/api-routes');

// blank lines to sync line numbers with sister file

app.use(bodyParser.json());

//
// HTTP access log
//
app.use(logger(':date[iso] :remote-addr :status :method :http-version :req[host]:url', {
}));

//
// Headers and Content Security Policy
//
app.use(helmet());
/* eslint-disable quotes */
app.use(helmet.contentSecurityPolicy({
  directives:
    {
      defaultSrc: ["'none'"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      styleSrc: ["'self'"],
      mediaSrc: ["'self'"],
      imgSrc: ["'self'"]
    }
}));
/* eslint-enable quotes */

//
// /status, Is the server alive?
//
app.get('/status', (req, res) => res.json({ status: 'ok' }));

// ----------------------------------
// This is a dummy api route handler
// ----------------------------------
app.use('/api/', dataRoutes);

// -------------------
// Load main page
// -------------------
const publicDir = path.join(__dirname, '../public');

//
// blank lines to sync line numbers with sister file
//
//

app.use(express.static(publicDir));
console.log('Serve public: ' + publicDir);

// ----------------------------------
// Use default NodeJs error handler
// ----------------------------------

module.exports = app;

console.log('Done loading app.js');
