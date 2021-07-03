'use strict';
console.log('loading app2.mjs');

// native node packages
import path from 'path';
import url from 'url';

// express packages
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
const app = express();

import dataRoutes from './routes/api-routes2.mjs';

// The test module is used to experiment (independant of ExpressJs)
import testModule from './modules/test-module.mjs';
testModule();

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
// extract disk filename
const __filename = url.fileURLToPath(import.meta.url);
// remove file leaving directory, this ends in "/server/"
const __dirname = path.dirname(__filename);
// backup (remove) the /server/ at the end of the tree and merge
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
console.log('Serve public: ' + publicDir);

// ----------------------------------
// Use default NodeJs error handler
// ----------------------------------

export default app;

console.log('Done loading app2.mjs');
