console.log('Loading api-routes.js');
(function () {
  const express = require('express');
  const router = express.Router();

  //
  // handler for /api/route
  //
  router.get('/myroute', function (req, res, next) {
    return res.json({
      data1: 'This is data1',
      data2: 12345
    });
  });

  module.exports = router;
}());
console.log('Done loading api-routes.js');
