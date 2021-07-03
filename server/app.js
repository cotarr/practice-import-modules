'use strict';

// native node packages
const path = require('path');
// const url = require('url');

// express packages
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

// route modules
const dataRoutes = require('./routes/api-routes');

// blank lines to sync line numbers with sister file
//
//
//

// express app
const app = express();

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
