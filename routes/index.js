var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cat', function(req, res, next) {
  res.send("Meow, I'm a cat");
});

module.exports = router;
