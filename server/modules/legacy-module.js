// -------------------------------------------------------------------
// THis is a legacy module containing object of multiple functions
// -------------------------------------------------------------------
(function () {
  'use strict';

  const logLegacy = function () {
    console.log('File: legacy-module.js. This is a legacy function with module.exports');
  };
  const logLegacy2 = function () {
    console.log('LogLegacy2 was here!');
  };

  module.exports = {
    logLegacy: logLegacy,
    logLegacy2: logLegacy2
  };
})();
