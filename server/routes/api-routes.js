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
