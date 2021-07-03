// Load an old style module with object containing multiple functions
import legacy from './legacy-module.js';

// Execute the imported functions
legacy.logLegacy();
legacy.logLegacy2();

// Load an old style module containing single function
import logFunc from './legacy-function.js';
// Execute the imported function
logFunc();

const dummy = function () {
  // do nothing
};

export default dummy;
