const router = require('express').Router();
import createToken from './token';

// return a list of tags
router.get('/uptoken', function(req, res, next) {
  const {file} = req.query;
  res.json({
    uptoken: createToken(file)
  });
});

module.exports = router;
