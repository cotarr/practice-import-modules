// Load a require/exports module with object containing multiple functions
import legacy from './legacy-module.cjs';

// Load a require/exports module containing single function
import logFunc from './legacy-function.cjs';
// const logFunc = require('./legacy-function.js').logFunc;

// Execute the imported functions
legacy.logLegacy();
legacy.logLegacy2();

// Execute the imported function
logFunc();

const dummy = function () {
  // do nothing
};

export default dummy;
