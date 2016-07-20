var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cat', function(req, res, next) {
  res.send("Meow, I'm a cat");
});

router.get('/dog', function(req,res,next){
  console.log('dog');
  res.send('Dog went bark');
})

module.exports = router;
