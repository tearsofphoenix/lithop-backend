const router = require('express').Router();
import createToken from './token';

// return a list of tags
router.get('/token', function(req, res, next) {
  const {file} = req.query;
  res.json({
    token: createToken(file)
  });
});

module.exports = router;
