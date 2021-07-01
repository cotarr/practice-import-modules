console.log('Loading api-routes2.mjs');

import express from 'express';
const router = express.Router();

//
// handler for /api/route
//
router.get('/myroute', function(req, res, next) {
  return res.json({
    data1: 'This is data1',
    data2: 12345
  });
});

export default router;

console.log('Done loading api-routes2.mjs');
