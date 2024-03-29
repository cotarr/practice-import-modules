'use strict';

// native node packages
import path from 'path';
import url from 'url';

// express packages
import express from 'express';

// morgan@1.10.0 appears to be a CommonJS package
import logger from 'morgan';

// helmet@7.0.0 appears to be a ES Package
import helmet from 'helmet';

// route modules
import dataRoutes from './routes/api-routes.mjs';

// The test module is used to experiment (Independent of ExpressJs)
import testModule from './modules/test-module.mjs';
// call test module dummy function
testModule();

// express app
const app = express();

// body parser
app.use(express.json());

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
